import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

@Schema({
    toJSON: {
      transform: function(doc, ret, options) {
        return ret
      }
    }
})
export class Story extends Document {
  @Prop()
  title: string

  @Prop()
  abstract: string

  @Prop()
  content: string
  
}

export const StorySchema = SchemaFactory.createForClass(Story)