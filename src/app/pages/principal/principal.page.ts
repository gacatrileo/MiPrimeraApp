import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
//se elimina lo que estaba en el local storage(ingresado)
  cerrarSesion(){
    localStorage.removeItem('ingresado');
    //redirige al login
    this.navCtrl.navigateRoot('login');
  }

}
