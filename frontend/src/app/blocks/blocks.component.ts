import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DistrictService } from '../districts/districts.service';
import { Block } from './blocks';

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.css']
})
export class BlocksComponent implements OnInit {
    
    constructor(private _router: Router,private _districtService: DistrictService){} 
    
    newdata: Block = new Block();
    data: Block =new Block();
    
     @Output()
      add: EventEmitter<Block> = new EventEmitter();
      
      
      adddata() {
      this.add.emit(this.newdata);
      this.newdata = new Block();
      console.log(this.newdata);
    }

  districts: District[];
  
  

  ngOnInit() {
       this._districtService.getDistricts().subscribe(districts => {this.districts = districts});
  }

}