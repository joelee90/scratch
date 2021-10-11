import { Controller, Get } from '@nestjs/common';

// high level routing rules
@Controller('/app')
export class AppController {
  @Get('/asdf')
  getRootRoute() {
    return 'hi there';
  }

  @Get('/bye')
  getByeThere() {
    return 'bye there';
  }
}
