import { Component, OnInit } from '@angular/core';
import { GetWayService } from '../services/getway.service';
import { Getway } from '../models/getway.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-getway',
  templateUrl: './create-getway.component.html',
  styleUrls: ['./create-getway.component.css']
})
export class CreateGetwayComponent implements OnInit {
  public getway:Getway = new Getway('','','');
  public error:string | undefined;
  constructor(private getWayService: GetWayService, private router: Router) { }

  ngOnInit(): void {
  }
  async addGetway(getway:Getway ): Promise<any>{
    try{
    const resp = await this.getWayService.createGetway(getway);
    if (resp){
      this.router.navigateByUrl('/getways')
    }}
    catch(err){
      this.error = err.error.message;
    }
   }
}
