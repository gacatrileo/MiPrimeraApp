import { Component, OnInit } from '@angular/core';
import { GetapiService } from '../../pokeApi/getapi.service';


@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.page.html',
  styleUrls: ['./pokedex.page.scss'],
})
export class PokedexPage implements OnInit {

  getdata:any[]=[];

  constructor( public _services: GetapiService) { 
    this._services.getdata<any[]>("").subscribe(data =>{
        this.getdata = Object.values(data)[5];
        console.log(this.getdata);
    })
  }

  ngOnInit() {
  }

}
