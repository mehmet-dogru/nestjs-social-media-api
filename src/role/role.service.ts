import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleDto } from 'src/tools/dtos/role.dto';
import { Role } from 'src/tools/models/role.model';
import { Repository } from 'typeorm';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role)
    private roleRepository: Repository<Role>,
  ) {}

  async create(roleDto: RoleDto): Promise<Role> {
    return this.roleRepository.save(roleDto);
  }

  findAll(): Promise<Role[]> {
    return this.roleRepository.find();
  }

  findOne(id: number): Promise<Role> {
    return this.roleRepository.findOne({ where: { id } });
  }

  update(id: number, roleDto: RoleDto): Promise<any> {
    return this.roleRepository.update(id, roleDto);
  }

  async remove(id: number): Promise<void> {
    await this.roleRepository.delete(id);
  }
}
