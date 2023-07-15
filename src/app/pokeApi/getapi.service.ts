import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class GetapiService {
  baseUrl='https://pokeapi.co/api/v2'

  constructor( public _http: HttpClient) { 

  }

  getPokemon (offset=0){
    return this._http.get(`${this.baseUrl}/pokemon?offset=${offset}&limit=10`);
  }


}
