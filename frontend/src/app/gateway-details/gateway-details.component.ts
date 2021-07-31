import { Component, OnInit } from '@angular/core';
import { GetWayService } from '../services/gateway.service';
import { Gateway } from '../models/gateway.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gateway-details',
  templateUrl: './gateway-details.component.html',
  styleUrls: ['./gateway-details.component.css']
})
export class GatewayDetailsComponent implements OnInit {
  public gateway!: Gateway;

  constructor(private getWayService: GetWayService, private route: ActivatedRoute) { }

  async ngOnInit() {
    const serial =this.route.snapshot.params["serial"];
    this.gateway = await this.getWayService.getOneGetWay(serial);
  }
  async deleteDevice(serial: string, uid: string): Promise<any>{
    const resp = await this.getWayService.deleteDevice(serial, uid);
    if (resp){
     this.gateway = await await this.getWayService.getOneGetWay(serial);
    }
   }
}
