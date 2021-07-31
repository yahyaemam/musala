import { Device } from './device.model';
import { Injectable } from '@angular/core';
import { Adapter } from './adapter';

export class Gateway {
  constructor(
    public name: string,
    public serial: string,
    public ip: string,
    public createdAt?: string,
    public devices?: Device[]
  ) { }
}

@Injectable({
  providedIn: 'root'
})
export class GatewayAdapter implements Adapter<Gateway> {
  adapt(item: any): Gateway {
    return new Gateway(item.name, item.serial, item.ip, item.createdAt, item.devices);
  }
}
