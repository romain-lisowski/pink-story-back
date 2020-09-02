import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import { Optional } from '@nestjs/common'
import { Gender } from '../../enums/gender.enum'
import { Role } from '../../enums/role.enum'
import { Orientation } from '../../enums/orientation.enum'
import { ToArray } from '../../helpers/to-array.helper'
@Schema({
    toJSON: {
      transform: function(doc, ret, options) {
        delete ret.password
        return ret
      }
    }
})
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

  @Prop({
    type: String,
    enum: ToArray(Role),
    default: 'user'
  })
  role: string

  @Prop({
    unique: true,
    index: true
  })
  pseudo: string

  @Prop({
    type: String,
    enum: ToArray(Gender),
    default: 'other'
  })
  gender: string

  @Prop({
    type: String,
    enum: ToArray(Orientation),
    default: 'hetero'
  })
  orientation: string

  @Prop()
  @Optional()
  description: string

  @Prop({
    type: Date,
    default: Date.now
  })
  createdAt: Date
}

export const UserSchema = SchemaFactory.createForClass(User)