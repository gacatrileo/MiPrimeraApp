import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders  } from '@angular/common/http';

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

   getdataPoke<T> (url : string)
  {
    console.log("GCD: DUMMY TEST0");
    url = 'https://pokeapi.co/api/v2/pokedex/1';
    return this._http.get<T[]>(url);

  }

   getDummy(){
    
    this._http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe((response) => {
     
    console.log(response);
  });
  }

}
