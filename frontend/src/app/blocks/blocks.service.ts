import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Block } from './blocks';

@Injectable()
export class BlockService {
   private databaseUrl='http://35.193.44.255:3000';

   constructor(private _http: Http){}
   
   getBlocks(): Observable<BLock[]> {
      return this._http.get(this.databaseUrl + '/blocks.json')
      .map((response) => {
          const datas =  response.json();
          return datas.map((data) => new Block(data));
      })
   }
   
}