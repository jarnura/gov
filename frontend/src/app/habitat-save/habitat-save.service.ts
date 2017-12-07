import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Habitat } from '../habitats/habitats';

@Injectable()
export class HabitatSaveService {
   private databaseUrl='http://35.193.44.255:3000';

   constructor(private _http: Http){}
   
   createhabitats(data: Habitat): Observable<Habitat> { 
       return this._http.post(this.databaseUrl + '/habitats.json', data) 
       .map((response) =>{ 
           return new Habitat(response.json()); 
       })
   }
   
}