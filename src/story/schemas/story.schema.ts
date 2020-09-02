import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, Types } from 'mongoose'
import { User } from 'src/users/schemas/user.schema'

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

}

export const StorySchema = SchemaFactory.createForClass(Story)