import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Role } from './role.model';
import { Post } from './post.model';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Column({ nullable: true })
  image: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  birthDay: Date;

  @ManyToMany((type) => Role, (role) => role.users, { cascade: false })
  @JoinTable()
  roles: Role[];

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];
}
