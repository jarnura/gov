import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Block } from '../blocks/blocks';
import { BlockSaveService } from './block-save.service';
import { BlockService } from '../blocks/blocks.service';

@Component({
  selector: 'app-block-save',
  templateUrl: './block-save.component.html',
  styleUrls: ['./block-save.component.css']
})
export class BlockSaveComponent implements OnInit {

  constructor(
      private _router: Router,
      private _dataService: BlockSaveService,
      private _blockService: BlockService
      ){} 


   blocks: Block[];
   
  ngOnInit() {
      this._blockService.getBlocks().subscribe(blocks => { this.blocks = blocks});
  }
  
  onCreate(data): void { 
          this._dataService.createblock(data).subscribe((newdata) => {
            this.blocks = this.blocks.concat(newdata);
          });
       }

}
