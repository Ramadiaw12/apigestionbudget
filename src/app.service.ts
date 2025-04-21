import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'hello world';
  }
  // getUsers() {
  //   return [ 
  //     {
  //       id: 23,
  //       name: "khadim",
  //     },
  //   ];
  // }
}
