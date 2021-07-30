import { Device } from './device.interface';

export interface Getway {
  id: string;
  name: string;
  ip: string;
  serial: string;
  createdAt: Date;
  devices:Device[];
}
