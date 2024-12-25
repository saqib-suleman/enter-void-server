import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from './guards/gql-auth.guard';

@Resolver()
@UseGuards(GqlAuthGuard)
export class AppResolver {
  @Query(() => String)
  async sayHello() {
    return 'Hello World';
  }
}
