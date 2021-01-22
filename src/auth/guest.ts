import express from 'express';
import uuidv4 from 'uuid/v4';

import { IRequest } from '../types';
import { Connection } from 'typeorm';
import { Guest } from '../entity/network/Guest';
import StatisticsTracker from '../apps/StatisticsTracker';

const crawlers = require('crawler-user-agents');

export default class GuestModule {
    private network: Connection;
    private statisticalTrackers: StatisticsTracker[] = [];
    private cookieName: string;
    private cookieSecret: string;

    constructor (network: Connection) {
        this.network = network;

        this.cookieName = process.env.GUEST_SESSION_NAME;
        this.cookieSecret = process.env.GUEST_SESSION_SECRET;

        if (typeof this.network == "undefined") {
            console.log("[GUEST] Network connection undefined.");
        }

        if (typeof this.cookieName == "undefined" || this.cookieName == '') {
            console.log("[GUEST] Guest session cookies are not configured properly!");
        }
    }

    async isGuest(req: IRequest) {
        if (typeof req.cookies != "undefined" && typeof req.cookies[this.cookieName] != "undefined") {
            let cookie = req.cookies[this.cookieName];
            let FoundGuest = await this.network.getRepository(Guest).findOne({ Cookie: cookie });
        
            if (typeof FoundGuest != "undefined") {
                return FoundGuest;
            }
        }

        return null;
    }

    /** Checks if the request comes from a bot user agent */
    isBot(req: IRequest) {
        for (let element of crawlers) {
            if (typeof element != "undefined") {
                if (RegExp(element.pattern).test(req.headers['user-agent'])) {
                    return true;
                }
            }
        }

        return false;
    }

    async createGuestSession(req: IRequest, res) {
        // look at the request cookies
        let FoundGuest = await this.isGuest(req);
        if (FoundGuest) {
            req.guest = this.GuestPassportWrapper(FoundGuest);
            return FoundGuest.Cookie;
        } else {
            // generate random session id
            const sessionID = uuidv4();

            let cookieSettings = {
                // that's three years
                maxAge: 1000 * 60 * 60 * 24 * 1095,
                expires: 1000 * 60 * 60 * 24 * 1095,
                httpOnly: true
            } as any;

            if (process.env.NODE_ENV === "production") {
                cookieSettings.domain = '.' + process.env.DOMAIN;
                cookieSettings.secure = true;
            }

            res.cookie(this.cookieName, sessionID, cookieSettings);
            
            // we store whether a guest is using mobile or desktop
            let isMobile = false;
            if (typeof req.headers["user-agent"] != "undefined") {
                if (this.isBot(req)) return;

                (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) isMobile = true;})(req.headers["user-agent"]);
            }

            const now = Math.round(new Date().valueOf()/1000);

            let createdGuest = await this.network.getRepository(Guest).save({
                Cookie: sessionID,
                IP: req.clientIp,
                Mobile: isMobile,
                Expires: now + (60 * 60 * 24 * 1095)
            } as Guest);

            req.guest = this.GuestPassportWrapper(createdGuest);

            return sessionID;
        }
    }

    getMiddleware() {
        return async (req: IRequest, res, next) => {
            if (req.guest) {
                if (req.isAuthenticated()) {
                    console.log("User has a guest session...");
                    // We need to transfer all the statistics
                    // from the guest object to user object
                    for (let tracker of this.statisticalTrackers) {
                        tracker.transfer(req.guest, req.user);
                    }
    
                    delete req.guest;
                }
    
                return next();
            }
    
            return next();
        }
    }

    GuestPassportWrapper (entity: Guest) {
        return {
            ID: entity.ID,
            Cookie: entity.Cookie,
            IP: entity.IP,
            Display_Name: entity.Display_Name,
            Expires: entity.Expires,
            Mobile: entity.Mobile,
        } as Guest;
    }

    pushTracker (tracker: StatisticsTracker) {
        this.statisticalTrackers.push(tracker);
    }

    attachTestEndpoint(app: express.Express) {
        app.get('/play/guest', (req: IRequest, res) => {
            res.send(req.guest);
        });
    }
}