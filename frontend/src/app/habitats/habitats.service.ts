import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Village } from '../villages/villages';
import { Block } from '../blocks/blocks';
import { Habitat } from './habitats';

@Injectable()
export class HabitatService {
   private databaseUrl='http://35.193.44.255:3000';

   constructor(private _http: Http){}
   
   getHabitats(): Observable<Habitat[]> {
       return this._http.get(this.databaseUrl + '/habitats.json')
       .map((response) => {
           const datas = response.json();
           return datas.map((data) => new Habitat(data));
       })
   }
   
   getVillages(id: number): Observable<Village[]> {
      return this._http.get(this.databaseUrl + '/blocks/loadvillages/' + id + '.json')
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