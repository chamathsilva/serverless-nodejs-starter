import HttpStatus from 'http-status-codes';
import request from 'supertest';
import { app } from '../../../app';


describe('routes: get /v1/hello', () => {
  test('should respond with success status', async () => {
    const response = await request(app)
      .get('/v1/hello')
      .set('Accept', 'application/json');
    expect(response.status).toEqual(HttpStatus.OK);
    expect(response.body).toBeDefined();
  });
});
