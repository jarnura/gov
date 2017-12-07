import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DistrictService } from '../districts/districts.service';
import { Block } from '../blocks/blocks';
import { Village } from '../villages/villages';
import { Habitat } from './habitats';
import { HabitatService } from './habitats.service';
import { District } from '../districts/districts';

@Component({
  selector: 'app-habitats',
  templateUrl: './habitats.component.html',
  styleUrls: ['./habitats.component.css']
})
export class HabitatsComponent implements OnInit {

  constructor(
      private _router: Router,
      private _districtService: DistrictService,
      private _dataService: HabitatService
    ){}
    
    newdata: Habitat = new Habitat();
    data: Habitat =new Habitat();
    districts: District[];
    blocks: Block[];
    villages: Village[];
    
    @Output()
      add: EventEmitter<Habitat> = new EventEmitter();
      
      adddata() {
          this.add.emit(this.newdata);
          this.newdata = new Habitat();
          console.log(this.newdata);
        }

    ngOnInit() {
       this._districtService.getDistricts().subscribe(districts => {this.districts = districts});
    }
    
    getblocks() {
      console.log(this.newdata.district_id);
      this._dataService.getBlocks(this.newdata.district_id).subscribe(blocks => {this.blocks = blocks});
    }
    
    getvillages() {
      console.log(this.newdata.block_id);
      this._dataService.getVillages(this.newdata.block_id).subscribe(villages => {this.villages = villages});
    }

}


  
      
    
    
     

    
        
  
  
  

}