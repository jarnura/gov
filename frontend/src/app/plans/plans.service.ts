import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Habitat } from '../habitats/habitats';
import { Plan } from './plans';

@Injectable()
export class PlanService {
   private databaseUrl='http://35.193.44.255:3000';

   constructor(private _http: Http){}
   
   getPlans(): Observable<Plan[]>{
       return this._http.get(this.databaseUrl + '/plans.json')
       .map((response) => {
           const datas = response.json();
           return datas.map((data) => new Plan(data));
       })
   }
   
   getHabitats(id: number): Observable<Habitat[]> {
      return this._http.get(this.databaseUrl + '/villages/loadhabitats/' + id + '.json')
      .map((response) => {
          const datas =  response.json();
          return datas.map((data) => new Habitat(data));
      })
   }
   
   
}