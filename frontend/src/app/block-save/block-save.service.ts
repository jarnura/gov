import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Block } from '../blocks/blocks';

@Injectable()
export class BlockSaveService {
   private databaseUrl='http://35.193.44.255:3000';

   constructor(private _http: Http){}
   
   createblock(data: Block): Observable<Block> { 
       return this._http.post(this.databaseUrl + '/blocks.json', data) 
       .map((response) =>{ 
           return new Block(response.json()); 
       })
   }
   
}