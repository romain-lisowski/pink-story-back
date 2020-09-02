import { IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class UpdateStoryDto {
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
