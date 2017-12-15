import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Plan } from '../plans/plans';

@Component({
  selector: 'like-dislike',
  templateUrl: './like_dislike.component.html'
})
export class LikeDislikeComponent {
  @Input() like: number;
  @Input() plan: Plan;
  @Output() likesChanges: EventEmitter<number> = new EventEmitter<number>();
  @Output() plandata: EventEmitter<Plan> = new EventEmitter<Plan>();

  constructor() {
  }

  addLike() {
    this.like++;
    this.likesChanges.emit(this.like);
  }
  
  passPlan(){
      this.plandata.emit(this.plan);
     // this.plan = new Plan();
      console.log(this.plan);
      console.log("planId" + this.plan.id);
  }
}