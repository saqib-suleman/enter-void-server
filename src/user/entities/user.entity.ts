import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Post } from 'src/post/entities/post.entity';

@ObjectType()
export class User {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  email: string;

  @Field(() => String, { nullable: true })
  firstName?: string;

  @Field(() => String, { nullable: true })
  lastName?: string;

  @Field(() => String, { nullable: true })
  userNmae?: string;

  @Field(() => [Post])
  posts: Post[];

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date;
}
