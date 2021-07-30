import { Injectable } from '@angular/core';
import { HttpHeplerService } from './http-helper.service';
import { environment } from 'src/environments/environment';
import { GetwayAdapter, Getway } from '../models/getway.model';
import { Device } from '../models/device.model';


@Injectable({
  providedIn: 'root'
})
export class GetWayService {
  constructor( private adapter: GetwayAdapter ,  private httpHeplerService: HttpHeplerService) {}

  async list(): Promise<Getway[]> {
    const url = `${environment.apiUrl}/getway`;
    const {data} = await this.httpHeplerService.request('GET', url);
    return data.map(
      (item: any) =>
      this.adapter.adapt(item)
    );
  }
  async getOneGetWay(serial: string): Promise<Getway> {
    const url = `${environment.apiUrl}/getway/${serial}`;
    const {data} = await this.httpHeplerService.request('GET', url);
    return data && this.adapter.adapt(data);
  }
  async createGetway(getway: Getway): Promise<Getway> {
    const url = `${environment.apiUrl}/getway`;
    const {data} = await this.httpHeplerService.request('POST', url, getway);
    return data && this.adapter.adapt(data);
  }
  async delete(getway: Getway): Promise<Getway> {
    const url = `${environment.apiUrl}/getway/${getway.serial}`;
    const {data} = await this.httpHeplerService.request('DELETE', url);
    return data;
  }
  async AddDevice(device: Device, serial: string): Promise<Getway> {
    const url = `${environment.apiUrl}/getway/${serial}/device`;
    const {data} = await this.httpHeplerService.request('POST', url, device);
    return data && this.adapter.adapt(data);
  }
  async deleteDevice(serial: string, uid: string): Promise<Getway> {
    const url = `${environment.apiUrl}/getway/${serial}/device/${uid}`;
    const {data} = await this.httpHeplerService.request('DELETE', url);
    return data;
  }
}
