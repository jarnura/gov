import { Component, Input, Output, EventEmitter, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { District } from '../districts/districts';
import { Block } from '../blocks/blocks';
import { Village } from '../villages/villages';
import { Habitat } from '../habitats/habitats';
import { Plan } from '../plans/plans';
import { DistrictService } from '../districts/districts.service';
import { VillageService } from '../villages/villages.service';
import { HabitatService } from '../habitats/habitats.service';
import { PlanService } from '../plans/plans.service';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {

 constructor(
      private _router: Router,
      private _districtService: DistrictService,
      private _villageService: VillageService,
      private _habitatService: HabitatService,
      private _planService: PlanService,
      private _dataService: HomeService,
    ){
        this.progess_count_positive = 0;
        console.log("constructor" +  this.progess_count_positive);
    }
    
    districts: District[];
    blocks: Block[];
    villages: Village[];
    habitats: Habitat[];
    plans: Plan[];
    block_id: number;
    village_id: number;
    district_id: number;
    habitat_id: number;
    progess_count_positive: number;

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
        this._planService.getHabitats(this.village_id).subscribe(habitats => {this.habitats = habitats}); 
    }
    
    getplans() {
        console.log(this.habitat_id);
        this._dataService.getPlans(this.habitat_id).subscribe(plans => {this.plans = plans});
    }
    
    setLikes(plan) {
        console.log("plan id" + plan.id);
        this._dataService.updatePlan(plan).subscribe((newdata) => {
            this.plans = this.plans.find(plan.id).progress_count_positive=plan.progress_count_positive;
        });
    }
    
    onLike(value: number) {
    this.progess_count_positive = value;
    console.log("likes" + this.progess_count_positive);
  }

}