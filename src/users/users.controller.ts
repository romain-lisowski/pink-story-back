import { Controller, Post, Body, Delete, ValidationPipe, Get, UseGuards, Param } from '@nestjs/common'
import { UsersService } from './users.service'
import { CreateUserDto } from './dto/create-user.dto'
import { ApiHeaders } from 'src/decorators/api'
import { ApiTags } from '@nestjs/swagger'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'
import { User } from './schemas/user.schema'

@ApiTags('users')
@Controller('users')
export class UsersController {

  constructor(private readonly usersService: UsersService) {}

  @ApiHeaders()
  @Get()
  //TODO: Secure
  async findAll(): Promise<User[]> {
    return this.usersService.find()
  }

  @ApiHeaders()
  @Post()
  //TODO: Secure
  async create(@Body(new ValidationPipe({transform: true})) createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto)
  }

  @ApiHeaders()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.usersService.delete(id)
  }

}
