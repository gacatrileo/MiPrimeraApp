import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/servies/db.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  modeloUsuario: string = '';
  modeloContrasena: string ='';

  constructor(private dbService: DbService) { 
    console.log('Pagina Login Iniciada');
  }

  ngOnInit() {
  }

  validarCredenciales() {
    console.log(this.modeloUsuario);
    console.log(this.modeloContrasena);
  }
}
