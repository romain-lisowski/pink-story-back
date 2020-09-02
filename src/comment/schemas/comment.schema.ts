import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, Types } from 'mongoose'
import { User } from '../../users/schemas/user.schema'
import { Story } from '../../story/schemas/story.schema'

@Schema({
    toJSON: {
      transform: function(doc, ret, options) {
        return ret
      }
    }
})
export class Comment extends Document {
  @Prop({
    type: Types.ObjectId,
    ref:'User',
    required: true
  })
  user: User

  @Prop({
    type: Types.ObjectId,
    ref:'Story',
    required: true
  })
  story: Story

  @Prop({
    required: true
  })
  content: string

  @Prop({
    type: Date,
    default: Date.now
  })
  createdAt: Date
}

export const CommentSchema = SchemaFactory.createForClass(Comment)