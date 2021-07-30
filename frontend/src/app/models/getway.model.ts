import { Device } from './device.model';
import { Injectable } from '@angular/core';
import { Adapter } from './adapter';

export class Getway {
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
export class GetwayAdapter implements Adapter<Getway> {
  adapt(item: any): Getway {
    return new Getway(item.name, item.serial, item.ip, item.createdAt, item.devices);
  }
}
