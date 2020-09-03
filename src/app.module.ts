import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { UsersModule } from './users/users.module'
import { StoriesModule } from './stories/stories.module'
import { CommentsModule } from './comments/comments.module'
import { TagsModule } from './tags/tags.module'

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_CONNECTION_STRING, {
      useFindAndModify: false,
      useCreateIndex: true
    }), 
    AuthModule, 
    UsersModule, 
    StoriesModule, 
    CommentsModule, 
    TagsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
