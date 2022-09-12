import { Module } from '@nestjs/common';
import { LandingpageService } from './landingpage.service';
import { LandingpageController } from './landingpage.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { LandingPageSchema, LandingPage } from '../common/landingpage.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: LandingPage.name, schema: LandingPageSchema },
    ]),
  ],
  controllers: [LandingpageController],
  providers: [LandingpageService],
})
export class LandingpageModule {}
