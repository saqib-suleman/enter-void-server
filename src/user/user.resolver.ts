import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { UserService } from './user.service';
import { CreateUserInput } from './dto/create-user.input';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User)
  user_get(@Args('id') id: string) {
    return this.userService.findOne(id);
  }

  @Query(() => [User])
  user_listAll() {
    return this.userService.findAll();
  }

  @Mutation(() => User)
  user_create(@Args('userCreateInput') createUserInput: CreateUserInput) {
    return this.userService.createOne(createUserInput);
  }

  @Mutation(() => String)
  user_delete(@Args('id') id: string) {
    return this.userService.deleteOne(id);
  }
}
