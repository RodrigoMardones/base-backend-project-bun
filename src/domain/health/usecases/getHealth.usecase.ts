import UseCase from "../../interfaces/usecase";
import { HealthOutput } from "../models/health";
import healthServiceInterface from '../repositories/health.service';

export default class GetHealthUseCase implements UseCase<unknown, HealthOutput> {
    constructor (private readonly healthService : healthServiceInterface) {}
    execute(): HealthOutput | Promise<HealthOutput> {
        return this.healthService.getHealth();
    }
}