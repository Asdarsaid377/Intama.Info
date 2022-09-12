import { Injectable } from '@nestjs/common';
import { CreateLandingpageDto } from './dto/create-landingpage.dto';
import { Model } from 'mongoose';
import { LandingPage, LandingPageDocument } from '../common/landingpage.schema';
import { UpdateLandingpageDto } from './dto/update-landingpage.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class LandingpageService {
  constructor(
    @InjectModel(LandingPage.name)
    private landingPageModel: Model<LandingPageDocument>,
  ) {}

  create(createLandingpageDto: CreateLandingpageDto) {
    const data = new this.landingPageModel(createLandingpageDto);
    return data.save();
  }

  async findAll(): Promise<LandingPage[]> {
    return this.landingPageModel.find().exec();
  }

  findOne(_id: string) {
    return this.landingPageModel.findById(_id);
  }

  update(_id: string, updateLandingpageDto: UpdateLandingpageDto) {
    return this.landingPageModel.findByIdAndUpdate(_id, updateLandingpageDto);
  }

  remove(_id: string) {
    return this.landingPageModel.findByIdAndDelete(_id);
  }
}
