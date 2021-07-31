import { Injectable } from '@angular/core';
import { HttpHeplerService } from './http-helper.service';
import { environment } from 'src/environments/environment';
import { GatewayAdapter, Gateway } from '../models/gateway.model';
import { Device } from '../models/device.model';


@Injectable({
  providedIn: 'root'
})
export class GetWayService {
  constructor( private adapter: GatewayAdapter ,  private httpHeplerService: HttpHeplerService) {}

  async list(): Promise<Gateway[]> {
    const url = `${environment.apiUrl}/gateway`;
    const {data} = await this.httpHeplerService.request('GET', url);
    return data.map(
      (item: any) =>
      this.adapter.adapt(item)
    );
  }
  async getOneGetWay(serial: string): Promise<Gateway> {
    const url = `${environment.apiUrl}/gateway/${serial}`;
    const {data} = await this.httpHeplerService.request('GET', url);
    return data && this.adapter.adapt(data);
  }
  async createGateway(gateway: Gateway): Promise<Gateway> {
    const url = `${environment.apiUrl}/gateway`;
    const {data} = await this.httpHeplerService.request('POST', url, gateway);
    return data && this.adapter.adapt(data);
  }
  async delete(gateway: Gateway): Promise<Gateway> {
    const url = `${environment.apiUrl}/gateway/${gateway.serial}`;
    const {data} = await this.httpHeplerService.request('DELETE', url);
    return data;
  }
  async AddDevice(device: Device, serial: string): Promise<Gateway> {
    const url = `${environment.apiUrl}/gateway/${serial}/device`;
    const {data} = await this.httpHeplerService.request('POST', url, device);
    return data && this.adapter.adapt(data);
  }
  async deleteDevice(serial: string, uid: string): Promise<Gateway> {
    const url = `${environment.apiUrl}/gateway/${serial}/device/${uid}`;
    const {data} = await this.httpHeplerService.request('DELETE', url);
    return data;
  }
}
