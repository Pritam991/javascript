import { Controller, Get } from '@nestjs/common';
import {CarService} from './car.service';
@Controller('car')
export class CarController {
    constructor(private CarService: CarService){}

    
    @Get()
    async gerCars(){
        return.this.carService.getCars();
    }
}
