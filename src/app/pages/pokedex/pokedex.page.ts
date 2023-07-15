import { Component, OnInit } from '@angular/core';
import { GetapiService } from '../../pokeApi/getapi.service';


@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.page.html',
  styleUrls: ['./pokedex.page.scss'],
  
})
export class PokedexPage implements OnInit {

  offset=0;
  constructor( private getapiService: GetapiService) { 

  }

  ngOnInit() {
    this.loadPokemon();
  }

  loadPokemon(){
    console.log('GCD: ressdfhhhhult: ')
    this.getapiService.getPokemon(this.offset).subscribe(res =>{
      console.log('GCD: result!!!!');
      console.log('GCD: result: ', res);
    });
  }


}
