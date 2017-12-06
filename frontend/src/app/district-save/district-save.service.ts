import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { District } from '../districts/districts';

@Injectable()
export class DistrictSaveService {
   private databaseUrl='http://35.193.44.255:3000';

   constructor(private _http: Http){}
   
   createdistrict(data: District): Observable<District> { 
       return this._http.post(this.databaseUrl + '/districts.json', data) 
       .map((response) =>{ 
           return new District(response.json()); 
       })
   }
   
}