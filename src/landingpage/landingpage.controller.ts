import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LandingpageService } from './landingpage.service';
import { CreateLandingpageDto } from './dto/create-landingpage.dto';
import { UpdateLandingpageDto } from './dto/update-landingpage.dto';

@Controller('landingpage')
export class LandingpageController {
  constructor(private readonly landingpageService: LandingpageService) {}

  @Post()
  create(@Body() createLandingpageDto: CreateLandingpageDto) {
    return this.landingpageService.create(createLandingpageDto);
  }

  @Get()
  findAll() {
    return this.landingpageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.landingpageService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLandingpageDto: UpdateLandingpageDto,
  ) {
    return this.landingpageService.update(id, updateLandingpageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.landingpageService.remove(id);
  }
}
