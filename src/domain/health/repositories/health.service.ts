import { HealthOutput } from '../models/health';
export default interface healthServiceInterface {
    getHealth() : HealthOutput;
}