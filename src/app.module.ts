import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { UsersModule } from './users/users.module'
import { StoriesModule } from './story/stories.module'
import { CommentsModule } from './comment/comments.module'

@Module({
  imports: [
    AuthModule, 
    UsersModule, 
    MongooseModule.forRoot(process.env.MONGODB_CONNECTION_STRING, {
      useFindAndModify: false,
      useCreateIndex: true
    }), StoriesModule, CommentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
