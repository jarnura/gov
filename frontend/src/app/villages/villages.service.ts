import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Village } from './villages';
import { Block } from '../blocks/blocks';

@Injectable()
export class VillageService {
   private databaseUrl='http://35.193.44.255:3000';

   constructor(private _http: Http){}
   
   getVillages(): Observable<Village[]> {
      return this._http.get(this.databaseUrl + '/villages.json')
      .map((response) => {
          const datas =  response.json();
          return datas.map((data) => new Village(data));
      })
   }
   
   getBlocks(id: number): Observable<Block[]> {
       return this._http.get(this.databaseUrl + '/districts/loadblocks/' + id + '.json')
       .map((response) => {
           const datas = response.json();
           return datas.map((data) => new Block(data));
       })
   }
   
}