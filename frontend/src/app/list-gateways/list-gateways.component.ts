import { Component, OnInit } from '@angular/core';
import { Gateway } from '../models/gateway.model';
import { GetWayService } from '../services/gateway.service';

@Component({
  selector: 'app-list-gateways',
  templateUrl: './list-gateways.component.html',
  styleUrls: ['./list-gateways.component.css']
})
export class ListGatewaysComponent implements OnInit {
  gateways: Gateway[] = [];
  constructor(private getWayService: GetWayService) { }

  async ngOnInit() {
    this.gateways = await this.getWayService.list();
  }
  async delete(gateway: Gateway): Promise<any>{
    const resp = await this.getWayService.delete(gateway);
    if (resp){
     this.gateways = await this.getWayService.list();
    }
   }

}
