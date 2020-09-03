import { Controller, Post, Body, Delete, ValidationPipe, Get, UseGuards, Param, SetMetadata, Put } from '@nestjs/common'
import { StoriesService } from './stories.service'
import { ApiHeaders } from '../decorators/api'
import { ApiTags } from '@nestjs/swagger'
import { JwtAuthGuard } from '../guards/jwt-auth.guard'
import { Story } from './schemas/story.schema'
import { CreateStoryDto } from './dto/create-story.dto'

@ApiTags('stories')
@Controller('stories')
export class StoriesController {

  constructor(private readonly storiesService: StoriesService) {}

  @ApiHeaders()
  @Get()
  async findAll(): Promise<Story[]> {
    return this.storiesService.find()
  }

  @ApiHeaders()
  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body(new ValidationPipe({transform: true})) createStoryDto: CreateStoryDto): Promise<Story> {
    return this.storiesService.create(createStoryDto)
  }

  @ApiHeaders()
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(@Param('id') id: string, @Body(new ValidationPipe({transform: true})) createStoryDto: Partial<CreateStoryDto>): Promise<Partial<Story>> {
    return this.storiesService.update(id, createStoryDto)
  }

  @ApiHeaders()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.storiesService.delete(id)
  }

}
