import { Component, OnInit } from '@angular/core';
import { Device, status } from '../models/device.model';
import { GetWayService } from '../services/gateway.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-device',
  templateUrl: './create-device.component.html',
  styleUrls: ['./create-device.component.css']
})
export class CreateDeviceComponent implements OnInit {

  public device:Device = new Device('', status.online,'');
  public error:string | undefined;
  constructor(private getWayService: GetWayService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  async AddDevice(device:Device ): Promise<any>{
    const serial =this.route.snapshot.params["serial"];
    try{
    const resp = await this.getWayService.AddDevice(device,serial);
    if (resp){
      this.router.navigateByUrl(`/gateway-details/${serial}`)
    }}
    catch(err){
      this.error = err.error.message;
    }
   }
}
