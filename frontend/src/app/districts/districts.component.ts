import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { District } from './districts';
import { DistrictService } from './districts.service';

@Component({
  selector: 'app-districts',
  templateUrl: './districts.component.html',
  styleUrls: ['./districts.component.css']
})
export class DistrictsComponent implements OnInit {
    
    newdata: District = new District();
    data: District =new District();

      @Output()
      add: EventEmitter<District> = new EventEmitter();
  
    adddata() {
      this.add.emit(this.newdata);
      this.newdata = new District();
      console.log(this.newdata);
    }

  constructor(private _router: Router,private _dataService: DistrictService){} 
  
  districts: District[];
  
  ngOnInit() : void {
         this._dataService.getDistricts().subscribe(districts => {this.districts = districts});
    }

}
