/**
 * Created by chamaths
 * 7/4/18
 **/

// Core modules
import express from "express"
import bodyParser from "body-parser"
import serverless from "serverless-http"
import helmet from 'helmet';
import cors from 'cors';
import HttpStatus from 'http-status-codes';


// Custom modules
import router from './routes'

const app = express()

// standard middleware
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Root end-point
app.get('/', (req, res) => {
    res.status(HttpStatus.OK).send('Your function executed successfully!');
});

// Set Express router with API version prefix
app.use("/v1/", router)

// wrap and export express API for serverless framework.
exports.serverlessApp = serverless(app)

// export express app for supertest (unit test & integration test)
exports.app = app;
