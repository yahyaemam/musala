import { Component, OnInit } from '@angular/core';
import { GetWayService } from '../services/getway.service';
import { Getway } from '../models/getway.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-getway-details',
  templateUrl: './getway-details.component.html',
  styleUrls: ['./getway-details.component.css']
})
export class GetwayDetailsComponent implements OnInit {
  public getway!: Getway;

  constructor(private getWayService: GetWayService, private route: ActivatedRoute) { }

  async ngOnInit() {
    const serial =this.route.snapshot.params["serial"];
    this.getway = await this.getWayService.getOneGetWay(serial);
  }
  async deleteDevice(serial: string, uid: string): Promise<any>{
    const resp = await this.getWayService.deleteDevice(serial, uid);
    if (resp){
     this.getway = await await this.getWayService.getOneGetWay(serial);
    }
   }
}
