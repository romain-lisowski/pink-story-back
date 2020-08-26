import { IsString, IsEmail } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class CreateUserDto {
  @ApiProperty()
  @IsEmail()
  readonly email: string

  @ApiProperty()
  @IsString()
  password: string
}
