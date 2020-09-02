import { Controller, Post, Body, Delete, ValidationPipe, Get, UseGuards, Param, SetMetadata, Put } from '@nestjs/common'
import { StoriesService } from './stories.service'
import { ApiHeaders } from 'src/decorators/api'
import { ApiTags } from '@nestjs/swagger'
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard'
import { RolesGuard } from 'src/guards/roles.guard'
import { Story } from './schemas/story.schema'
import { CreateStoryDto } from './dto/create-story.dto'
import { UpdateStoryDto } from './dto/update-story.dto'

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
  async update(@Param('id') id: string, @Body(new ValidationPipe({transform: true})) updateStoryDto: Partial<UpdateStoryDto>): Promise<Partial<Story>> {
    return this.storiesService.update(id, updateStoryDto)
  }

  @ApiHeaders()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.storiesService.delete(id)
  }

}
