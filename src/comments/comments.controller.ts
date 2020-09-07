import { Controller, Post, Body, Delete, ValidationPipe, UseGuards, Param, Put } from '@nestjs/common'
import { CommentsService } from './comments.service'
import { ApiHeaders } from '../decorators/api'
import { ApiTags } from '@nestjs/swagger'
import { JwtAuthGuard } from '../guards/jwt-auth.guard'
import { Comment } from './schemas/comment.schema'
import { CreateCommentDto } from './dto/create-comment.dto'

@ApiTags('comments')
@Controller('comments')
export class CommentsController {

  constructor(private readonly commentsService: CommentsService) {}
  
  @ApiHeaders()
  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body(new ValidationPipe({transform: true})) createCommentDto: CreateCommentDto): Promise<Comment> {
    return this.commentsService.create(createCommentDto)
  }

  @ApiHeaders()
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(@Param('id') id: string, @Body(new ValidationPipe({transform: true})) createCommentDto: Partial<CreateCommentDto>): Promise<Partial<Comment>> {
    return this.commentsService.update(id, createCommentDto)
  }

  @ApiHeaders()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.commentsService.delete(id)
  }

}
