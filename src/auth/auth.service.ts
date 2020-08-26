import { Injectable } from '@nestjs/common'
import { UsersService } from '../users/users.service'
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(email)
    if (user) {
      const isPasswordMatching = await bcrypt.compare(pass, user.password)
      if (isPasswordMatching) {
        return user
      }
    }
    
    return null
  }

  async login(user: any) {
    const userDb = await this.usersService.findOneByEmail(user.email)
    const payload = { email: userDb.email, role: userDb.role }
    return {
      access_token: this.jwtService.sign(payload),
    }
  }

}
