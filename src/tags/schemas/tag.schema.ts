import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

@Schema({
    toJSON: {
      transform: function(doc, ret, options) {
        return ret
      }
    }
})
export class Tag extends Document {
  @Prop({
    required: true
  })
  name: string

  @Prop({
    type: Date,
    default: Date.now
  })
  createdAt: Date
}

export const TagSchema = SchemaFactory.createForClass(Tag)