import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { DistrictSaveService } from './district-save.service';
import { District } from '../districts/districts';
import { DistrictService } from '../districts/districts.service';

@Component({
  selector: 'app-district-save',
  templateUrl: './district-save.component.html',
  styleUrls: ['./district-save.component.css']
})
export class DistrictSaveComponent implements OnInit {

  constructor(
      private _router: Router,
      private _dataService: DistrictSaveService,
      private _districtService: DistrictService
      ){} 
  
  districts: District[];
  
  ngOnInit() : void {
         this._districtService.getDistricts().subscribe(districts => {this.districts = districts});
    }

  onCreate(data): void { 
          this._dataService.createdistrict(data).subscribe((newdata) => {
            this.districts = this.districts.concat(newdata);
          });
       }

}
