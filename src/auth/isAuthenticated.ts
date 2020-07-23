import { ApolloError } from "apollo-server-core";
import { MiddlewareFn } from "type-graphql";
import { IContext } from "../types";

export const isAuthenticated: 
    MiddlewareFn<IContext> = ({ context }, next): 
    Promise<any> => {
        if (!context.user) {
            throw new ApolloError("not authenticated");
        }

        return next();
};