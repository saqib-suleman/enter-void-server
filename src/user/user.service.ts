import {
  ForbiddenException,
  Injectable,
  NotFoundException
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserInput } from './dto/create-user.input';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  findOne(id: string) {
    return this.prisma.user.findFirst({
      where: {
        id
      }
    });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  async createOne(createUserInput: CreateUserInput) {
    try {
      const userExists = await this.prisma.user.findUnique({
        where: {
          email: createUserInput.email
        }
      });

      if (userExists) throw new ForbiddenException('User already exists.');

      return this.prisma.user.create({
        data: createUserInput
      });
    } catch (error) {
      return error;
    }
  }

  async deleteOne(id: string) {
    try {
      const userExists = await this.prisma.user.findUnique({
        where: {
          id
        }
      });

      if (!userExists) throw new NotFoundException();

      await this.prisma.user.delete({
        where: {
          id
        }
      });

      return 'User succesfully removed';
    } catch (error) {
      return error;
    }
  }
}
