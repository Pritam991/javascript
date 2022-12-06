import { Injectable } from '@nestjs/common';
import { CARS } from './cars.mock';

@Injectable()
export class CarService {
 private cars = CARS;

    public async getCars(){
        return this.cars;
    }
}
