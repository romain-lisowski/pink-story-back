import { IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { User } from 'src/users/schemas/user.schema'

export class UpdateStoryDto {
  @ApiProperty()
  @IsString()
  user: User

  @ApiProperty()
  @IsString()
  title: string

  @ApiProperty()
  @IsString()
  abstract: string

  @ApiProperty()
  @IsString()
  content: string
  
}
