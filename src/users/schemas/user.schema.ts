import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

@Schema()
export class User extends Document {
  @Prop({
    unique: true,
    index: true
  })
  email: string

  @Prop({
    unique: true,
    index: true
  })
  password: string

  @Prop()
  role: string
}

export const UserSchema = SchemaFactory.createForClass(User)