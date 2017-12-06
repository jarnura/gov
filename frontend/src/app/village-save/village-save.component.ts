import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Village } from '../villages/villages';
import { VillageSaveService } from './village-save.service';
import { VillageService } from '../villages/villages.service';

@Component({
  selector: 'app-village-save',
  templateUrl: './village-save.component.html',
  styleUrls: ['./village-save.component.css']
})
export class VillageSaveComponent implements OnInit {

    constructor(
      private _router: Router,
      private _dataService: VillageSaveService,
      private _villageService: VillageService
      ){} 
    villages: Village[];
    
   ngOnInit() {
      this._villageService.getVillages().subscribe(villages => { this.villages = villages});
   }
   
   onCreate(data): void { 
          this._dataService.createvillage(data).subscribe((newdata) => {
            this.villages = this.villages.concat(newdata);
          });
       }

}



