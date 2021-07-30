import { NextFunction, Request, Response } from 'express';
import GatewayService from '../services/gateway.service';
import { Getway } from '../interfaces/getway.interface';
import { CreateGetwayDto } from '../dtos/getway.dto';
import { AddDeviceDto } from '../dtos/device.dto';
import { Device } from '../interfaces/device.interface';

class GatewayController  {
  public gatewayService = new GatewayService();
  public  getAllGetways = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllGetWays: Getway[] = await this.gatewayService.getAll();
      res.status(200).json({ data: findAllGetWays, message: 'findAllGetWays' });
    } catch (error) {
      next(error);
    }
  }
  public getoneGetway = async (req: Request, res: Response, next: NextFunction) => {
    const serial: string = req.params.serial;
    try {
      const findonegetway: Getway = await this.gatewayService.getone(serial);
      res.status(200).json({ data: findonegetway, message: 'findonegetway' });
    } catch (error) {
      next(error);
    }
  }
  public  createGetways = async (req: Request, res: Response, next: NextFunction) => {
    const createGetwayDto: CreateGetwayDto = req.body;
    try {
      const createdGetway: Getway = await this.gatewayService.createGetWays(createGetwayDto);
      res.status(200).json({ data: createdGetway, message: 'create getway' });
    } catch (error) {
      next(error);
    }
  }
  public  addDevice = async (req: Request, res: Response, next: NextFunction) => {
    const addDeviceDto: AddDeviceDto = req.body;
    const serial: string = req.params.serial;
    try {
      const getway: Getway = await this.gatewayService.addDevice(addDeviceDto, serial);
      res.status(200).json({ data: getway, message: 'added device' });
    } catch (error) {
      next(error);
    }
  }
  public getoneDevice = async (req: Request, res: Response, next: NextFunction) => {
    const uid: string = req.params.uid;
    try {
      const findonegetway: Device = await this.gatewayService.getoneDevice(uid);
      res.status(200).json({ data: findonegetway, message: 'fineOne Device' });
    } catch (error) {
      next(error);
    }
  }
  public deleteGetway = async (req: Request, res: Response, next: NextFunction) => {
    const serial: string = req.params.serial;
    try {
      const deletedGetway: Getway = await this.gatewayService.deleteGetway(serial);
      res.status(200).json({ data: deletedGetway, message: 'deleted getway' });
    } catch (error) {
      next(error);
    }
  }
  public deleteDevice = async (req: Request, res: Response, next: NextFunction) => {
    const serial: string = req.params.serial;
    const uid: string = req.params.uid;
    try {
      const deletedDevice: Device = await this.gatewayService.deleteDevice(serial, uid);
      res.status(200).json({ data: deletedDevice, message: 'deleted device' });
    } catch (error) {
      next(error);
    }
  }
}

export default GatewayController;
