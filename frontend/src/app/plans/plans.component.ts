import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DistrictService } from '../districts/districts.service';
import { Block } from '../blocks/blocks';
import { Village } from '../villages/villages';
import { Habitat } from '../habitats/habitats';
import { HabitatService } from '../habitats/habitats.service';
import { District } from '../districts/districts';
import { Plan } from './plans';
import { PlanService } from './plans.service';
import { VillageService } from '../villages/villages.service';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {

  constructor(
      private _router: Router,
      private _districtService: DistrictService,
      private _villageService: VillageService,
      private _habitatService: HabitatService,
      private _dataService: PlanService
    ){}
    
    newdata: Plan = new Plan();
    data: Plan =new Plan();
    districts: District[];
    blocks: Block[];
    villages: Village[];
    habitats: Habitat[];
    block_id: number;
    village_id: number;
    district_id: number;

    @Output()
      add: EventEmitter<Plan> = new EventEmitter();
      
      adddata() {
          this.add.emit(this.newdata);
          this.newdata = new Plan();
          console.log(this.newdata);
        }

    ngOnInit() {
       this._districtService.getDistricts().subscribe(districts => {this.districts = districts});
    }
    
    getblocks() {
      console.log(this.district_id);
      this._villageService.getBlocks(this.district_id).subscribe(blocks => {this.blocks = blocks});
    }
    
    getvillages() {
      console.log(this.block_id);
      this._habitatService.getVillages(this.block_id).subscribe(villages => {this.villages = villages});
    }
    
    gethabitats() {
        console.log(this.village_id);
        this._dataService.getHabitats(this.village_id).subscribe(habitats => {this.habitats = habitats}); 
    }

}
