import { Controller, Post, Body, Delete, ValidationPipe, Get, UseGuards, Param, SetMetadata, Put } from '@nestjs/common'
import { UsersService } from './users.service'
import { CreateUserDto } from './dto/create-user.dto'
import { ApiHeaders } from 'src/decorators/api'
import { ApiTags } from '@nestjs/swagger'
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard'
import { User } from './schemas/user.schema'
import { RolesGuard } from 'src/guards/roles.guard'
import { UpdateUserDto } from './dto/update-user.dto'

@ApiTags('users')
@Controller('users')
export class UsersController {

  constructor(private readonly usersService: UsersService) {}

  @ApiHeaders()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @SetMetadata('roles', ['admin'])
  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.find()
  }

  @ApiHeaders()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @SetMetadata('roles', ['admin'])
  @Post()
  async create(@Body(new ValidationPipe({transform: true})) createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto)
  }

  @ApiHeaders()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @SetMetadata('roles', ['admin'])
  @Put(':id')
  async update(@Param('id') id: string, @Body(new ValidationPipe({transform: true})) updateUserDto: Partial<UpdateUserDto>): Promise<Partial<User>> {
    return this.usersService.update(id, updateUserDto)
  }

  @ApiHeaders()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @SetMetadata('roles', ['admin'])
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.usersService.delete(id)
  }

}
