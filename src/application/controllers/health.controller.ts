import { Context, Hono } from "hono";
import GetHealthUseCase from "../../domain/health/usecases/getHealth.usecase";
import HealthService from "../services/Health.service";

export default class HealthController {
  health: Hono;
  constructor() {
    this.health = new Hono();
    this.register();
  }
  register() {
    this.health.get('/', this.getHealth);
  }
  async getHealth(c: Context): Promise<Response> {
    const res = await new GetHealthUseCase(
      new HealthService()
    ).execute();
    return c.json(res);
  }
  getController(): Hono {
    return this.health;
  }
}
