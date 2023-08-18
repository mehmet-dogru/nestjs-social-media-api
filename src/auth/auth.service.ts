import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/tools/models/user.model';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, password: string): Promise<any> {
    const user = await this.userService.findOneByEmail(email);

    const passwordHashed = await this.userService.convertToHash(password);
    const isLogin = await this.userService.compareHashes(
      password,
      passwordHashed,
    );

    if (!isLogin) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async profile(id: number): Promise<User> {
    const user = await this.userService.findOne(id);

    return user;
  }
}
