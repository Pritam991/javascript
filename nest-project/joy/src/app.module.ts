import { Module } from '@nestjs/common';
import { CarModule } from './car/car.module';
import { CarService } from './car/car.service';

@Module({
  imports: [CarModule],
  providers: [CarService],
})
export class AppModule {}
