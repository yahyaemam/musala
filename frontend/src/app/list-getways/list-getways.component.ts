import { Component, OnInit } from '@angular/core';
import { Getway } from '../models/getway.model';
import { GetWayService } from '../services/getway.service';

@Component({
  selector: 'app-list-getways',
  templateUrl: './list-getways.component.html',
  styleUrls: ['./list-getways.component.css']
})
export class ListGetwaysComponent implements OnInit {
  getways: Getway[] = [];
  constructor(private getWayService: GetWayService) { }

  async ngOnInit() {
    this.getways = await this.getWayService.list();
  }
  async delete(getway: Getway): Promise<any>{
    const resp = await this.getWayService.delete(getway);
    if (resp){
     this.getways = await this.getWayService.list();
    }
   }

}
