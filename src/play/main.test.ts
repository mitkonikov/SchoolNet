import { Db, MongoClient } from "typeorm";
import { connectMongo } from "../database/connection";
import { createMongoUser } from "./main";
import { IGameConfig } from "./types";

const testDb = "test_play";
const testRole = "testappRole";
const testUser = "testappUser";
const testUserPassword = "test123";

const testPlayConfig = {
    short_name: "test_app",
    mongodb_password: "test123"
} as IGameConfig;

describe("Mongo Database Connection", () => {
    test("Check env variables", () => {
        expect(process.env.TEST_MONGO_URI).toBeTruthy();
    });

    let connection: MongoClient;
    let play: Db;

    beforeAll(async () => {
        connection = (await connectMongo(
            process.env.TEST_MONGO_URI
        )) as MongoClient;
        play = connection.db(testDb);
    });

    afterAll(async () => {
        await play.dropDatabase();
    });

    test("Connect to MongoDB", async () => {
        let collections = await play.listCollections({}).toArray();
        // let roles = await play.executeDbAdminCommand({ rolesInfo: 1 });
        // let users = await play.executeDbAdminCommand({ usersInfo: 1 });

        expect(collections.length).toBe(0);
    });
});

describe("Tests for database users", () => {
    let connection: MongoClient;
    let play: Db;

    beforeAll(async () => {
        connection = (await connectMongo(
            process.env.TEST_MONGO_URI
        )) as MongoClient;
        play = connection.db(testDb);
    });

    afterAll(async () => {
        await play.command({ dropAllRolesFromDatabase: 1 });
        await play.command({ dropAllUsersFromDatabase: 1 });
        await play.dropDatabase();
    });

    test("Create role and user", async () => {
        await play.command({
            createRole: testRole,
            privileges: [
                {
                    resource: { db: testDb, collection: "testCollection" },
                    actions: ["find", "update", "insert", "remove"],
                }
            ],
            roles: []
        });

        let roles = await play.command({ rolesInfo: 1 });
        let found = false;
        for (let role of roles.roles) {
            if (role.role == testRole) {
                found = true;
                break;
            }
        }

        expect(found).toBeTruthy();

        await play.command({
            createUser: testUser,
            pwd: testUserPassword,
            roles: [testRole]
        });

        let users = await play.command({ usersInfo: 1 });

        found = false;
        for (let user of users.users) {
            if (user.user == testUser) {
                found = true;
                break;
            }
        }

        expect(found).toBeTruthy();
    });

    test("Create a Role and User from config", async () => {
        await createMongoUser(play, testPlayConfig);
        let roles = await play.command({ rolesInfo: 1 }) as { roles: any[] };
        let users = await play.command({ usersInfo: 1 }) as { users: any[] };

        console.log(roles);
        console.log(users);
        
        expect(roles.roles.some((obj) => obj.role == testPlayConfig.short_name + "Role")).toBeTruthy();
        expect(users.users.some((obj) => obj.user == testPlayConfig.short_name + "User")).toBeTruthy();
    });
});