import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { StoriesService } from './stories.service'
import { StoriesController } from './stories.controller'
import { Story, StorySchema } from './schemas/story.schema'

@Module({
  imports: [MongooseModule.forFeature([{ name: Story.name, schema: StorySchema }])],
  controllers: [StoriesController],
  providers: [StoriesService],
  exports: [StoriesService],
})
export class StoriesModule {}