import Express from 'express';
import passport from 'passport';
import crypto from 'crypto';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import { OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth';
import { Connection } from 'typeorm';
import { User } from '../entity/network/User';
import { Statistic } from '../entity/network/Statistic';
import { UserInfo } from '../entity/network/UserInfo';
import { IRequest, IUser } from '../types';

let userPassportWrapper = (entity: User): IUser => {
    return {
        ID: entity.ID,
        // Basic Info
        Nickname: entity.Nickname,
        Role: entity.Role,
        Firstname: entity.Firstname,
        Lastname: entity.Lastname,
        School_ID: entity.School_ID,
        Email: entity.Email,
        Gender: entity.Gender,
        Online: entity.Online,
        // OAuth Tokens
        FB_AccessToken: entity.FB_AccessToken,
        FB_RefreshToken: entity.FB_RefreshToken,
        FB_ProfileName: entity.FB_ProfileName,
        FB_ID: entity.FB_ID,
        G_AccessToken: entity.G_AccessToken,
        G_RefreshToken: entity.G_RefreshToken,
        G_ProfileName: entity.G_ProfileName,
        G_ID: entity.G_ID
    }
}

/**
 * Connect an existing user to a Facebook account
 * @param UserID ID for the existing user
 * @param ID Facebook supplied ID number
 * @param name Facebook supplied name
 * @param accessToken Access Token for Facebook
 * @param refreshToken Refresh Token for Facebook
 * @param network Connection to the main database
 */
const connectUserToFacebook = async (UserID: number, ID: string, name: string, accessToken: string, refreshToken: string, network: Connection) => {
    // This is to connect an existing user to a Facebook account
    let user = await User.findOne({ ID: UserID });
    user.FB_ProfileName = name;
    user.FB_AccessToken = accessToken;
    user.FB_ID = ID;

    if (typeof refreshToken != "undefined") {
        user.FB_RefreshToken = refreshToken;
    }

    return await network.getRepository(User).save(user);
}

/**
 * Connect an existing user to a Google account
 * @param UserID ID for the existing user
 * @param ID Google supplied ID number
 * @param name Google supplied name
 * @param accessToken Access Token for Google
 * @param refreshToken Refresh Token for Google
 * @param network Connection to the main database
 */
const connectUserToGoogle = async (UserID: number, ID: string, name: string, accessToken: string, refreshToken: string, network: Connection) => {
    // This is to connect an existing user to a Google account
    let user = await User.findOne({ ID: UserID });
    user.G_ProfileName = name;
    user.G_AccessToken = accessToken;
    user.G_ID = ID;

    if (typeof refreshToken != "undefined") {
        user.G_RefreshToken = refreshToken;
    }

    return await network.getRepository(User).save(user);
}

const updateLoginStats = async (UserID: number) => {
    const loginTime = new Date().toISOString().slice(0, 19).replace('T', ' ');
    let statistics = await Statistic.findOne({ ID: UserID });
    statistics.Last_Date_Login = loginTime;
    statistics.Logins += 1;
    await statistics.save();
    return statistics;
}

/** Creates a new User Info Object */
const createUserInfo = async (ID: number, name: string, network: Connection) => {
    let newUserInfo = new UserInfo();
    newUserInfo.ID = ID;
    newUserInfo.Display_Name = name;
    return await network.getRepository(UserInfo).save(newUserInfo);
}

/** Create a new User Statistics Object */
const createUserStatistics = async (ID: number, network: Connection) => {
    let newUserStats = new Statistic();
    newUserStats.ID = ID;
    newUserStats.Last_Date_Login = new Date()
        .toISOString()
        .slice(0, 19)
        .replace("T", " ");
    newUserStats.Successive_Logins = 1;
    newUserStats.Logins = 1;
    // Save them
    return await network.getRepository(Statistic).save(newUserStats);
}

const Initialize = (app: Express.Express, network: Connection) => {
    app.use(passport.initialize());
    app.use(passport.session());

    const localStrategyConfig = {
        usernameField: "username",
        passwordField: "password",
        passReqToCallback: true
    }

    passport.use(
        "local",
        new LocalStrategy(localStrategyConfig,
            async (req: IRequest, username: string, password: string, done: Function) => {
                let salt = process.env.PASSPORT_SALT;

                let school = req.body.school;

                const user = await network.getRepository(User).findOne({ Nickname: username, School_ID: school });
                if (user) {
                    salt = salt + password;
                    let encPassword = crypto
                            .createHash("sha256")
                            .update(salt)
                            .digest("hex");

                    let dbPassword = user.Password;

                    // Password matches
                    if (dbPassword == encPassword) {
                        await updateLoginStats(user.ID);
                        return done(null, userPassportWrapper(user));
                    }
                }
                
                done(null, false);
            }
        )
    );

    const facebookStrategyConfig = {
        clientID: process.env.FACEBOOK_APP_ID,
        clientSecret: process.env.FACEBOOK_APP_SECRET,
        callbackURL: process.env.FACEBOOK_CALLBACK_URL,
        passReqToCallback: true
    }

    passport.use(
        new FacebookStrategy(facebookStrategyConfig,
            async (req: IRequest, accessToken, refreshToken, profile, done) => {
                console.log("req.params: ", req.params);
                
                const FB_NAME = profile._json.name;
                const FB_ID = profile._json.id;
                const encAccessToken = accessToken;

                if (req.isAuthenticated() && req.user.FB_ID == '' && req.user.G_ID != '') {
                    const updatedUser = await connectUserToFacebook(
                        req.user.ID,
                        FB_ID,
                        FB_NAME,
                        encAccessToken,
                        refreshToken,
                        network
                    );
                    
                    done(null, userPassportWrapper(updatedUser));
                } else {
                    // Check if a user already exists
                    let user = await User.findOne({ FB_ID: FB_ID });
                    if (user) {
                        user.Online = true;
                        await user.save();
                        updateLoginStats(user.ID);
                        done(null, userPassportWrapper(user));
                    } else {
                        const profileName = FB_NAME;

                        // Create a new user
                        let newUser = new User();
                        newUser.Role = 0;
                        newUser.Valid = true;
                        newUser.Online = true;
                        newUser.FB_ProfileName = profileName;
                        newUser.FB_AccessToken = encAccessToken;
                        newUser.FB_ID = FB_ID;

                        if (typeof refreshToken != "undefined") {
                            newUser.FB_RefreshToken = refreshToken;
                        }

                        let createdUser = await network.getRepository(User).save(newUser);

                        await createUserInfo(createdUser.ID, profileName, network);
                        await createUserStatistics(createdUser.ID, network);

                        // Call done on passport authentication
                        done(null, userPassportWrapper(createdUser));
                    }
                }
            }
        )
    );

    const googleStrategyConfig = {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK_URL,
        passReqToCallback: true
    }

    passport.use(
        new GoogleStrategy(googleStrategyConfig,
            async (req: IRequest, accessToken, refreshToken, profile, done) => {
                console.log("req.params: ", req.params);

                const G_ID = profile.id;
                const G_NAME = profile.displayName;

                if (req.isAuthenticated() && req.user.FB_ID != '' && req.user.G_ID == '') {
                    const updatedUser = await connectUserToGoogle(
                        req.user.ID,
                        G_ID,
                        G_NAME,
                        accessToken,
                        refreshToken,
                        network
                    );
                    
                    done(null, userPassportWrapper(updatedUser));
                } else {
                    // Check if a user already exists
                    let user = await User.findOne({ G_ID: G_ID });
                    if (user) {
                        user.Online = true;
                        await user.save();
                        updateLoginStats(user.ID);
                        done(null, userPassportWrapper(user));
                    } else {
                        const profileName = G_NAME;

                        // Create a new user
                        let newUser = new User();
                        newUser.Role = 0;
                        newUser.Valid = true;
                        newUser.Online = true;
                        newUser.G_ProfileName = profileName;
                        newUser.G_AccessToken = accessToken;
                        newUser.G_ID = G_ID;

                        if (typeof refreshToken != "undefined") {
                            newUser.G_RefreshToken = refreshToken;
                        }

                        let createdUser = await network.getRepository(User).save(newUser);

                        await createUserInfo(createdUser.ID, profileName, network);
                        await createUserStatistics(createdUser.ID, network);

                        // Call done on passport authentication
                        done(null, userPassportWrapper(createdUser));
                    }
                }
        }
    ));

    passport.serializeUser((user: User, done) => {
        done(null, user.ID);
    });

    passport.deserializeUser(async (ID: number, done) => {
        const user = await User.findOne({ ID });
        if (user) {
            done(null, userPassportWrapper(user));
        } else {
            done("User not found", {});
        }
    });

    return {
        passport
    };
};

export {
    Initialize
};