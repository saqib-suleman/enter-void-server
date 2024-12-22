import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class AppResolver {
  @Query(() => String)
  async sayHello() {
    return 'Hello World';
  }
}
