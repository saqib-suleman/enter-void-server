import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) {}

  findMany(email: string) {
    return this.prisma.post.findMany({
      where: {
        author: {
          email
        }
      }
    });
  }
}
