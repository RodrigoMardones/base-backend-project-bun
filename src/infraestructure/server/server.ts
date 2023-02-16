import { Hono } from "hono";
import { logger } from 'hono/logger';
import { cors } from 'hono/cors';

import HealthController from '../../application/controllers/health.controller';
export default class Server {
    app: Hono;
    constructor() {
        this.app = new Hono();
        this.setGlobalMiddlewares();
        this.setControllers();
    }
    private setControllers() {
        this.app.route('/health', new HealthController().getController());
    }
    private setGlobalMiddlewares() {
        this.app.use('*', logger());
        this.app.use('*', cors());
    }
    init () {
        return {
            port : 3000,
            fetch : this.app.fetch
        }
    }
}