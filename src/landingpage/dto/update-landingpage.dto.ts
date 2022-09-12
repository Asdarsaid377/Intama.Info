import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString } from 'class-validator';
import { CreateLandingpageDto } from './create-landingpage.dto';

export class UpdateLandingpageDto extends PartialType(CreateLandingpageDto) {
  @IsNotEmpty()
  @IsString({ message: 'Value Must Be String' })
  about: string;

  @IsNotEmpty()
  @IsString({ message: 'Value Must Be String' })
  test: string;

  @IsNotEmpty()
  @IsString({ message: 'Value Must Be String' })
  name: string;
}
