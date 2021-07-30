import { Router } from 'express';
import GetwayController from '../controllers/gateway.controller';
import Route from '../interfaces/routes.interface';
import validationMiddleware from '../middlewares/validation.middleware';
import { CreateGetwayDto } from '../dtos/getway.dto';
import { AddDeviceDto } from '../dtos/device.dto';

class GetwayRoute implements Route {
  public path = '/getway';
  public router = Router();
  public getwayController = new GetwayController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    /**
     * @swagger
     * /getway:
     *   get:
     *     summary: This should retreive all getways.
     *     description: This where you can list all getways.
     *     consumes:
     *       — application/json
     *     responses:
     *       200:
     *         description: Receive list of all getways.
     */
    this.router.get(`${this.path}`, this.getwayController.getAllGetways);
    this.router.get(`${this.path}/:serial`, this.getwayController.getoneGetway);
    this.router.get(`${this.path}/:uid/device`, this.getwayController.getoneDevice);
    this.router.post(
      `${this.path}`,
      validationMiddleware(CreateGetwayDto),
      this.getwayController.createGetways
    );
    this.router.post(`${this.path}/:serial/device`,
                     validationMiddleware(AddDeviceDto), this.getwayController.addDevice);
    this.router.delete(`${this.path}/:serial`, this.getwayController.deleteGetway);
    this.router.delete(`${this.path}/:serial/device/:uid`, this.getwayController.deleteDevice);
  }
}

export default GetwayRoute;
