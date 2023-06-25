import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  modeloUsuario: string = '';
  modeloContrasena: string ='';

  constructor() { 
    console.log('Pagina Login Iniciada');
  }

  ngOnInit() {
  }

  validarCredenciales() {
    console.log(this.modeloUsuario);
    console.log(this.modeloContrasena);
  }
}
