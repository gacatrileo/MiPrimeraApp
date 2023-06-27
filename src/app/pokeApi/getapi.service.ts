import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class GetapiService {

  constructor( public _http: HttpClient) { 

  }

  getdata<T> (url : string)
  {
    url = 'https://pokeapi.co/api/v2/pokedex/1';
    return this._http.get<T[]>(url);
  }
}
