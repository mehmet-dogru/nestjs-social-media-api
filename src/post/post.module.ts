import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from 'src/tools/models/post.model';

@Module({
  imports: [
    TypeOrmModule.forFeature([Post]),
  ],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
