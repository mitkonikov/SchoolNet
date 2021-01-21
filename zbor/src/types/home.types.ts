export type User = {
    isAuth: boolean;
    clientIp?: string;
    basic?: {
        Display_Name: string
    }
}