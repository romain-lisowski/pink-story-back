import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, Types } from 'mongoose'
import { User } from '../../users/schemas/user.schema'
import { Orientation } from '../../enums/orientation.enum'
import { ToArray } from '../../helpers/to-array.helper'
import { Category } from '../../enums/category'

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
    type: String,
    enum: ToArray(Category),
    default: 'mf'
  })
  category: string

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