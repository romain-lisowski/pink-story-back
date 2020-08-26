import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { ValidationPipe } from '@nestjs/common'
import { Logger } from '@nestjs/common'
import * as helmet from 'helmet'
import * as bodyParser from 'body-parser'
import 'dotenv/config'

const port = process.env.PORT || 3000
async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  
  app.useGlobalPipes(new ValidationPipe())
  app.use(helmet())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.enableCors()
  const options = new DocumentBuilder()
  .setTitle('Pink API')
  .setVersion('1.0')
  .build()

  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api', app, document)

  await app.listen(port)
  Logger.log(`🚀 Server running on http://localhost:${port}`, 'Bootstrap')

}
bootstrap()
