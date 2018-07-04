import { Router } from 'express';
import HttpStatus from 'http-status-codes';

class HelloApi {
  constructor() {
    this.router = new Router({ mergeParams: true });
    this.router.get('/hello', this.hello);
  }

  async hello(req, res, next) {
    try {
      res.status(HttpStatus.OK).send("HI");
    } catch (error) {
      next(error);
    //   todo
    }
  }
}

export default HelloApi;