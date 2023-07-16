import { Component, OnInit } from '@angular/core';
import { GetapiService } from '../../pokeApi/getapi.service';


@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.page.html',
  styleUrls: ['./pokedex.page.scss'],
  
})
export class PokedexPage implements OnInit {

  //offset=0;
  getdata:any[]=[{'name': 'pikachu'}];

  constructor( private getapiService: GetapiService) { 
    
    this.getapiService.getdataPoke<any[]>("").subscribe(data =>{
      console.log(data);
      this.getdata = Object.values(data)[5];
      console.log(this.getdata);
  })
  }

  ngOnInit() {
    this.getapiService.getDummy();
    //this.loadPokemon();
  }

  /*
  loadPokemon(){
    console.log('GCD: ressdfhhhhult: ')
    this.getapiService.getPokemon(this.offset).subscribe(res =>{
      console.log('GCD: result: ', res)
    });
   
  }
 */

}
