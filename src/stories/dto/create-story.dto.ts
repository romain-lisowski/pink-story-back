import { IsString, IsDate, IsEnum, IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { User } from '../../users/schemas/user.schema'
import { Orientation } from '../../enums/orientation.enum'
import { Category } from '../../enums/category'

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

  @ApiProperty({ enum: Category, enumName: 'Category' })
  @IsEnum(Category)
  readonly category: string

  @ApiProperty()
  @IsDate()
  @IsOptional()
  readonly publishedAt: Date
}
