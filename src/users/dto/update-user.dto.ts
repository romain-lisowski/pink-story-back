import { IsString, IsEmail } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class UpdateUserDto {
  @ApiProperty()
  @IsEmail()
  readonly email: string

  @ApiProperty()
  @IsString()
  password: string

  @ApiProperty()
  @IsString()
  role: string
}
