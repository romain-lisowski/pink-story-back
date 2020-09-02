import { IsString, IsEmail, IsEnum, IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { Role } from '../../enums/role.enum'
import { Gender } from '../../enums/gender.enum'
import { Orientation } from '../../enums/orientation.enum'

export class CreateUserDto {
  @ApiProperty()
  @IsEmail()
  readonly email: string

  @ApiProperty()
  @IsString()
  password: string

  @ApiProperty({ enum: Role, enumName: 'Role' })
  @IsEnum(Role)
  @IsOptional()
  readonly role: Role
  
  @ApiProperty()
  @IsString()
  readonly pseudo: string

  @ApiProperty({ enum: Gender, enumName: 'Gender' })
  @IsEnum(Gender)
  readonly gender: string
  
  @ApiProperty({ enum: Orientation, enumName: 'Orientation' })
  @IsEnum(Orientation)
  readonly orientation: string

  @ApiProperty()
  @IsString()
  readonly description: string

}