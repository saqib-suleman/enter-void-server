import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { join } from 'path';
import { AppResolver } from './app.resolver';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './guards/jwt-strategy';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      introspection: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      formatError: err => ({
        message: err.message,
        errorType: err.extensions.code,
        error: err.extensions.originalError
      })
    }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    PrismaModule,
    UserModule,
    PostModule
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver, PrismaService, JwtStrategy]
})
export class AppModule {}
