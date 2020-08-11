// import express from 'express';
const express = require('express');

class App {
    public express: any;

    constructor() {
        this.express = express()
        this.mountRoutes()
    }

    private mountRoutes(): void {
        const router = express.Router()
        router.get('/', (req: Express.Request, res: Express.Response) => {
            // res.json({
            return {
                message: 'Hello World!'
            };
        })
        this.express.use('/', router)
    }
}

export default new App().express