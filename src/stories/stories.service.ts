import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { CreateStoryDto } from './dto/create-story.dto'
import { Story } from './schemas/story.schema'

@Injectable()
export class StoriesService {
  constructor(@InjectModel(Story.name) private storyModel: Model<Story>) {}

  async find() {
    return await this.storyModel.find()
  }

  async create(createStoryDto: CreateStoryDto): Promise<Story> {
    const createdStory = new this.storyModel(createStoryDto)
    return createdStory.save()
  }

  async update(id: string, createStoryDto: Partial<CreateStoryDto>): Promise<Partial<Story>> {    
    return this.storyModel.findByIdAndUpdate(id, createStoryDto)
  }

  async delete(id: string): Promise<Story> {
    return this.storyModel.findByIdAndDelete(id)
  }

}