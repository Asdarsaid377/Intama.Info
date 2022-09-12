import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LandingPageDocument = LandingPage & Document;

@Schema()
export class LandingPage {
  @Prop({ required: true })
  about: string;

  @Prop({ required: true })
  test: number;

  @Prop({ required: true })
  name: string;
}

export const LandingPageSchema = SchemaFactory.createForClass(LandingPage);
