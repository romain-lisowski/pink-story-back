import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { CreateCommentDto } from './dto/create-comment.dto'
import { Comment } from './schemas/comment.schema'

@Injectable()
export class CommentsService {
  constructor(@InjectModel(Comment.name) private commentModel: Model<Comment>) {}

  async create(createCommentDto: CreateCommentDto): Promise<Comment> {
    const createdComment = new this.commentModel(createCommentDto)
    return createdComment.save()
  }

  async update(id: string, createCommentDto: Partial<CreateCommentDto>): Promise<Partial<Comment>> {    
    return this.commentModel.findByIdAndUpdate(id, createCommentDto)
  }

  async delete(id: string): Promise<Comment> {
    return this.commentModel.findByIdAndDelete(id)
  }

}