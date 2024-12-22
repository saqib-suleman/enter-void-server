import { Resolver, Query, Args } from '@nestjs/graphql';
import { Post } from './entities/post.entity';
import { PostService } from './post.service';

@Resolver(() => Post)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Query(() => [Post])
  post_list(@Args('userEmail') userEmail: string) {
    return this.postService.findMany(userEmail);
  }
}
