import { IsNotEmpty, IsStrongPassword } from 'class-validator';
import { User } from '../models/user.model';

export class PostCreateDto {
  @IsNotEmpty()
  title: string;
  content: string;
  user: User;
}

export class PostUpdateDto {
  @IsNotEmpty()
  title: string;
  content: string;
}
