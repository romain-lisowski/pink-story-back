import { IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { User } from '../../users/schemas/user.schema'
import { Story } from '../../stories/schemas/story.schema'

export class CreateCommentDto {
  @ApiProperty()
  @IsString()
  user: User

  @ApiProperty()
  @IsString()
  story: Story

  @ApiProperty()
  @IsString()
  content: string
  
}
