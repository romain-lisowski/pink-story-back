import { Controller, Post, Body, Delete, ValidationPipe, Get, UseGuards, Param, SetMetadata, Put } from '@nestjs/common'
import { ApiHeaders } from '../decorators/api'
import { ApiTags } from '@nestjs/swagger'
import { JwtAuthGuard } from '../guards/jwt-auth.guard'
import { TagsService } from './tags.service'
import { CreateTagDto } from './dto/create-tag.dto'
import { Tag } from './schemas/tag.schema'

@ApiTags('tags')
@Controller('tags')
export class TagsController {

  constructor(private readonly tagsService: TagsService) {}

  @ApiHeaders()
  @Get()
  async findAll(): Promise<Tag[]> {
    return this.tagsService.find()
  }

  @ApiHeaders()
  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body(new ValidationPipe({transform: true})) createTagDto: CreateTagDto): Promise<Tag> {
    return this.tagsService.create(createTagDto)
  }

  @ApiHeaders()
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(@Param('id') id: string, @Body(new ValidationPipe({transform: true})) createTagDto: Partial<CreateTagDto>): Promise<Partial<Tag>> {
    return this.tagsService.update(id, createTagDto)
  }

  @ApiHeaders()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.tagsService.delete(id)
  }

}
