import { Controller, Get, Request, Post, UseGuards, Body, ValidationPipe } from '@nestjs/common'
import { ApiHeaders } from 'src/decorators/api'
import { ApiTags } from '@nestjs/swagger'
import { AuthService } from './auth.service'
import { LocalAuthGuard } from './local-auth.guard'
import { JwtAuthGuard } from '../guards/jwt-auth.guard'
import { LoginUserDto } from 'src/users/dto/login-user.dto'

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiHeaders()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body(new ValidationPipe({transform: true})) loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto)
  }

  @ApiHeaders()
  @UseGuards(JwtAuthGuard)
  @Get('self')
  getProfile(@Request() req) {
    return req.user
  }
}
