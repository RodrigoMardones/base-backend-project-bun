import { HealthOutput } from "../../domain/health/models/health";

export default class HealthService {
    constructor () {}
    getHealth () : HealthOutput {
        return {
            message : 'UP',
            uptime : new Date()
        } satisfies HealthOutput;
    }
}