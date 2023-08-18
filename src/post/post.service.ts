import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostCreateDto, PostUpdateDto } from 'src/tools/dtos/post.dto';
import { Post } from 'src/tools/models/post.model';
import { Repository } from 'typeorm';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private postRepository: Repository<Post>,
  ) {}

  async create(postCreateDto: PostCreateDto) {
    return await this.postRepository.save(postCreateDto);
  }

  async findAll() {
    return await this.postRepository.find({ relations: ['user'] });
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, postUpdateDto: PostUpdateDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
