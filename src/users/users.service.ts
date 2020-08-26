import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { CreateUserDto } from './dto/create-user.dto'
import { User } from './schemas/user.schema'
import * as bcrypt from 'bcrypt'


@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async find(): Promise<User[] | undefined> {
    return this.userModel.find()
  }

  async findOneByEmail(email: string): Promise<User | undefined> {
    return this.userModel.findOne({ email: { $eq: email } })
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    // encrypt password
    const hash = await bcrypt.hash(createUserDto.password, 10)
    createUserDto.password = hash
    
    const createdUser = new this.userModel(createUserDto)
    return createdUser.save()
  }

  async delete(id: string): Promise<User> {
    return this.userModel.findByIdAndDelete(id)
  }
}