import { Component, OnInit } from '@angular/core';
import { GetWayService } from '../services/gateway.service';
import { Gateway } from '../models/gateway.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-gateway',
  templateUrl: './create-gateway.component.html',
  styleUrls: ['./create-gateway.component.css']
})
export class CreateGatewayComponent implements OnInit {
  public gateway:Gateway = new Gateway('','','');
  public error:string | undefined;
  constructor(private getWayService: GetWayService, private router: Router) { }

  ngOnInit(): void {
  }
  async addGateway(gateway:Gateway ): Promise<any>{
    try{
    const resp = await this.getWayService.createGateway(gateway);
    if (resp){
      this.router.navigateByUrl('/gateways')
    }}
    catch(err){
      this.error = err.error.message;
    }
   }
}
