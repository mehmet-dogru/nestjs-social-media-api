import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserCreateDto, UserUpdateDto } from 'src/tools/dtos/user.dto';
import { User } from 'src/tools/models/user.model';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async create(userCreateDto: UserCreateDto): Promise<User> {
    return await this.userRepository.save(userCreateDto);
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find({ relations: ['roles'] });
  }

  async findOne(id: number): Promise<User> {
    return await this.userRepository.findOne({ where: { id } });
  }

  async findOneByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne({ where: { email } });
  }

  async update(id: number, userUpdateDto: UserUpdateDto): Promise<any> {
    return await this.userRepository.update(id, userUpdateDto);
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }

  async convertToHash(value: string) {
    let hasPwd : string;

    await bcrypt.hash(value, 10).then((hash) => {
      hasPwd = hash;
    });

    return hasPwd;
  }

  async compareHashes(password: string, hashed: string) {
    const match = await bcrypt.compareSync(password, hashed);
    return match;
  }
}
