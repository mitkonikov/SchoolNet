import { Resolver, Query, Arg } from 'type-graphql';
import { User } from '../entity/network/User';

@Resolver()
export class UserResolver {
    @Query(() => User)
    user(@Arg("id") id: number) {
        return User.findOne({ where: { ID: id }});
    }
}