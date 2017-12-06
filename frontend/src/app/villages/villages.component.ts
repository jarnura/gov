import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DistrictService } from '../districts/districts.service';
import { Block } from '../blocks/blocks';
import { VillageService } from './villages.service';
import { Village } from './villages';

@Component({
  selector: 'app-villages',
  templateUrl: './villages.component.html',
  styleUrls: ['./villages.component.css']
})
export class VillagesComponent implements OnInit {

  constructor(
      private _router: Router,
      private _districtService: DistrictService,
      private _dataService: VillageService
    ){}
      
    newdata: Village = new Village();
    data: Village =new Village();
    districts: District[];
    blocks: Block[];
    
     @Output()
      add: EventEmitter<Village> = new EventEmitter();

    adddata() {
          this.add.emit(this.newdata);
          this.newdata = new Village();
          console.log(this.newdata);
        }
        
  ngOnInit() {
       this._districtService.getDistricts().subscribe(districts => {this.districts = districts});
  }
  
  getblocks() {
      console.log(this.newdata.district_id);
      this._dataService.getBlocks(this.newdata.district_id).subscribe(blocks => {this.blocks = blocks});
  }

}