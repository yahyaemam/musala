import * as bcrypt from 'bcrypt';
import HttpException from '../exceptions/HttpException';
import gatewayModel from '../models/gateway.model';
import { isEmptyObject } from '../utils/util';
import { Getway } from '../interfaces/getway.interface';
import { CreateGetwayDto } from '../dtos/getway.dto';
import { AddDeviceDto } from '../dtos/device.dto';
import { Device } from '../interfaces/device.interface';
import { v4 as uuidv4 } from 'uuid';
import deviceModel from '../models/device.model';

class GatewayService {
  public getway = gatewayModel;
  public device = deviceModel;
  public async getAll() {
    const getways: Getway[] = await this.getway.find();
    return getways;
  }
  public async getone(serial: string) {
    const getway: Getway = await this.getway.findOne({ serial }).populate('devices');
    if (!getway) {
      throw new HttpException(404, 'getway not found');
    }
    return getway;
  }
  public async createGetWays(createGetwayDto: CreateGetwayDto) {
    const getOneGetway: Getway = await this.getone(createGetwayDto.serial);
    if (getOneGetway) {
      throw new HttpException(403, 'duplicate serial number');
    }
    const getway: Getway = await this.getway.create(createGetwayDto);
    return getway;
  }
  public async addDevice(addDeviceDto: AddDeviceDto, getwaySerial: string) {
    const getOneGetway: Getway = await this.getone(getwaySerial);
    const device: Device = { uid:uuidv4(), ...addDeviceDto };
    if (getOneGetway.devices.length === 10) {
      throw new HttpException(403, `this getway ${getOneGetway.name} exceed maximum device `);
    }
    const createdDevice: Device = await this.device.create(device);
    return this.getway.findOneAndUpdate({ serial:getwaySerial }, { devices:[...getOneGetway.devices, createdDevice] });
  }
  public async getoneDevice(uid: string) {
    const device: Device = await this.device.findOne({ uid });
    if (!device) {
      throw new HttpException(404, 'device not found');
    }
    return device;
  }
  public async deleteGetway(serial: string) {
    const getOneGetway: Getway = await this.getone(serial);

    return this.getway.findOneAndDelete({ serial });
  }

  public async deleteDevice(serial: string, uid: string) {
    const getOneGetway: Getway = await this.getone(serial);
    const device: Device = await this.getoneDevice(uid);
    const filterdGetWayDevices = getOneGetway.devices.filter((deviceItem) => {
      return deviceItem.uid !== uid;
    });
    const updatedGetway: Getway = await this.getway.findOneAndUpdate({ serial }, { devices:filterdGetWayDevices });

    return this.device.findOneAndDelete({ uid });
  }
}

export default GatewayService;
