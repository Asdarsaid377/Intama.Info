import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LandingpageModule } from './landingpage/landingpage.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://asdarsaid:asdarsaid@cluster0.rudu9vp.mongodb.net/?retryWrites=true&w=majority',
    ),
    LandingpageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
