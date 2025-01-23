import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
// import { MyJwtGuard } from 'src/auth/guard';
import { MyJwtGuard } from '../auth/guard';

@Controller('user')
export class UserController {
  //   @UseGuards(AuthGuard('jwt'))
  @UseGuards(MyJwtGuard)
  @Get('me')
  me(@Req() request: Request) {
    console.log(request.user);
    // return 'My detail information';
    return request.user;
  }
}
