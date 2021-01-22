import { Connection } from "typeorm";
import mockConnection from "../tests/mockConnection";
import GuestModule from "./guest";
import MockExpressRequest from 'mock-express-request';
import MockExpressResponse from 'mock-express-response';
import { Guest } from "../entity/network/Guest";

let connection: Connection;
const realUserAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36";

beforeAll(async () => {
    connection = await mockConnection.create();
});

afterAll(async () => {
    await mockConnection.clear();
});

beforeEach(async () => {
    await mockConnection.clear();
});

describe('Guest Module Tests', () => {
    test("Constructing Guest Module. Test for failure.", () => {
        let temp = console.log;
        console.log = jest.fn();

        const guestModule = new GuestModule(connection);
        expect((console.log as jest.Mock<any, any>).mock.calls[0][0])
        .toBe('[GUEST] Guest session cookies are not configured properly!');
        
        console.log = temp;
    });

    test("Constructing Guest Module.", () => {
        process.env.GUEST_SESSION_NAME = 'GSESSION';
        process.env.GUEST_SESSION_SECRET = 'deepSecret';

        let temp = console.log;
        console.log = jest.fn();

        const guestModule = new GuestModule(connection);
        expect((console.log as jest.Mock<any, any>).mock.calls.length).toBe(0);
        
        console.log = temp;
    });

    test("Check non-registered Guest", async () => {
        process.env.GUEST_SESSION_NAME = 'GSESSION';
        process.env.GUEST_SESSION_SECRET = 'deepSecret';

        const guestModule = new GuestModule(connection);

        let request = new MockExpressRequest({
            method: "POST"
        });

        expect(await guestModule.isGuest(request)).toBeNull();
    });

    describe("Register a new Guest", () => {
        let setupModule = () => {
            process.env.GUEST_SESSION_NAME = 'GSESSION';
            process.env.GUEST_SESSION_SECRET = 'deepSecret';
    
            return new GuestModule(connection);
        }

        test("Register a new Guest", async () => {
            const guestModule = setupModule();
            
            let req = new MockExpressRequest({
                method: "POST",
                headers: {
                    'user-agent': realUserAgent
                }
            });

            let res = new MockExpressResponse();

            let cookie = await guestModule.createGuestSession(req, res);

            expect(res.get('Set-Cookie')).toBeTruthy();
            let guests = await connection.getRepository(Guest).find({
                Cookie: cookie
            });

            expect(guests.length).toBe(1);
        });
    });
});