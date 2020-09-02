import { IsString, IsDate, IsEnum, IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { User } from 'src/users/schemas/user.schema'
import { Orientation } from 'src/users/enums/orientation.enum'

export class CreateStoryDto {
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

  @ApiProperty({ enum: Orientation, enumName: 'Orientation' })
  @IsEnum(Orientation)
  readonly orientation: string

  @ApiProperty()
  @IsDate()
  @IsOptional()
  readonly publishedAt: Date
}
