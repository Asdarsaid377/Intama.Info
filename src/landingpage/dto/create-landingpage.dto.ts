import { IsNotEmpty, IsString } from 'class-validator';

export class CreateLandingpageDto {
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
