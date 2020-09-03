import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Tag } from './schemas/tag.schema'
import { CreateTagDto } from './dto/create-tag.dto'

@Injectable()
export class TagsService {
  constructor(@InjectModel(Tag.name) private tagModel: Model<Tag>) {}

  async find() {
    return await this.tagModel.find()
  }

  async create(createTagDto: CreateTagDto): Promise<Tag> {
    const createdTag = new this.tagModel(createTagDto)
    return createdTag.save()
  }

  async update(id: string, createTagDto: Partial<CreateTagDto>): Promise<Partial<Tag>> {    
    return this.tagModel.findByIdAndUpdate(id, createTagDto)
  }

  async delete(id: string): Promise<Tag> {
    return this.tagModel.findByIdAndDelete(id)
  }

}