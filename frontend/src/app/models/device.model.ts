
import { Injectable } from '@angular/core';
import { Adapter } from './adapter';

export class Device {
  constructor(
    public vendor: string,
    public status: status,
    public uid: string,
    public createdDate?: string,
  ) { }
}

@Injectable({
  providedIn: 'root'
}) export class DeviceAdapter implements Adapter<Device> {
  adapt(item: any): Device {
    return new Device(item.vendor, item.status, item.uid, item.createdDate);
  }
}
export enum status {
  online = "online",
  offline = "offline"
}
