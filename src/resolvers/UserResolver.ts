import { Resolver, Query, Arg, UseMiddleware, Ctx } from 'type-graphql';
import { User } from '../entity/network/User';
import { isAuthenticated } from '../auth/isAuthenticated';
import { IContext } from '../types';

@Resolver()
export class UserResolver {
    @Query(() => User)
    @UseMiddleware(isAuthenticated)
    user(@Arg("id") id: number) {
        // return User.findOne({ where: { ID: id }});
        return null;
    }

    @Query(() => Number)
    isAuth(@Ctx() context: IContext) {
        if (context.user && context.user.ID) {
            return context.user.ID;
        } else {
            return 0;
        }
    }
}