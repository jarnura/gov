import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Plan } from '../plans/plans';

@Injectable()
export class HomeService {
   private databaseUrl='http://35.193.44.255:3000';

   constructor(private _http: Http){}
   
   getPlans(id: number): Observable<Plan[]>{
       return this._http.get(this.databaseUrl + '/habitats/loadplans/' + id + '.json')
       .map((response) => {
           const datas = response.json();
           return datas.map((data) => new Plan(data));
       })
   }
   
   updatePlan(data: Plan): Observable<Plan> {
       return this._http.put(this.databaseUrl + '/plans/'+ data.id + '.json', data)
       .map((response) => {
           return new Plan(response.json());
       })
   }
}