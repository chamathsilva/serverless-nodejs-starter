import { Router } from 'express';
import HttpStatus from 'http-status-codes';

class HelloApi {
  constructor() {
    this.router = new Router({ mergeParams: true });
    this.router.get('/hello', this.hello);
  }

  async hello(req, res, next) {
      res.status(HttpStatus.OK).send("HI");    
  }
}

export default HelloApi;