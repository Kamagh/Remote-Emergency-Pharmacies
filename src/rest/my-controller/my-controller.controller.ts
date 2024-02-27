import {Controller, Get} from '@nestjs/common';

@Controller('my-controller')
export class MyControllerController {

    @Get("hello")
    public async get() {
        console.log("Hello World");
    }
}
