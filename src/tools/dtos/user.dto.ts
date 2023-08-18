import { Role } from '../models/role.model';
import { IsEmail, IsNotEmpty, IsStrongPassword } from 'class-validator';

export class UserCreateDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  surname: string;
  image: string;
  @IsNotEmpty()
  @IsStrongPassword()
  password: string;
  @IsEmail()
  email: string;
  roles: Role[];
}

export class UserUpdateDto {
  name: string;
  surname: string;
  image: string;
  password: string;
  email: string;
  roles: Role[];
}

export class UserLoginDto {
  email: string;
  password: string;
}
