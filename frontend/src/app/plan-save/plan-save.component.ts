import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plan } from '../plans/plans';
import { PlanService } from '../plans/plans.service';
import { PlanSaveService } from './plan-save.service';

@Component({
  selector: 'app-plan-save',
  templateUrl: './plan-save.component.html',
  styleUrls: ['./plan-save.component.css']
})
export class PlanSaveComponent implements OnInit {

  constructor(
      private _router: Router,
      private _dataService: PlanSaveService,
      private _planService: PlanService
      ){} 
      
      plans: Plan[];
      

  ngOnInit() {
      this._planService.getPlans().subscribe(plans => { this.plans = plans });
  }
  
  onCreate(data): void {
      this._dataService.createplans(data).subscribe((newdata) => {
          this.plans = this.plans.concat(newdata);
      });
  }

}
