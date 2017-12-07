import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habitat } from '../habitats/habitats';
import { HabitatSaveService } from './habitat-save.service';
import { HabitatService } from '../habitats/habitats.service';

@Component({
  selector: 'app-habitat-save',
  templateUrl: './habitat-save.component.html',
  styleUrls: ['./habitat-save.component.css']
})
export class HabitatSaveComponent implements OnInit {

  constructor(
      private _router: Router,
      private _dataService: HabitatSaveService,
      private _habitatService: HabitatService
      ){} 
      
      habitats: Habitat[];
      

  ngOnInit() {
      this._habitatService.getHabitats().subscribe(habitats => { this.habitats = habitats});
   }
   
    onCreate(data): void { 
          this._dataService.createhabitats(data).subscribe((newdata) => {
            this.habitats = this.habitats.concat(newdata);
          });
       }

}
