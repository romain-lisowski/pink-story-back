import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, Types } from 'mongoose'
import { User } from 'src/users/schemas/user.schema'
import { Orientation } from 'src/users/enums/orientation.enum'
import { ToArray } from 'src/helpers/to-array.helper'

@Schema({
    toJSON: {
      transform: function(doc, ret, options) {
        return ret
      }
    }
})
export class Story extends Document {
  @Prop({
    type: Types.ObjectId,
    ref:'User',
    required: true
  })
  user: User

  @Prop()
  title: string

  @Prop()
  abstract: string

  @Prop()
  content: string

  @Prop({
    type: String,
    enum: ToArray(Orientation),
    default: 'hetero'
  })
  orientation: string

  @Prop({
    type: Date,
  })
  publishedAt: Date

  @Prop({
    type: Date,
    default: Date.now
  })
  createdAt: Date
}

export const StorySchema = SchemaFactory.createForClass(Story)