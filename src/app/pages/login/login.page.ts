import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/servies/db.service';
import { ToastController,NavController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  modeloCorreo: string = '';
  modeloContrasena: string ='';

  constructor(private dbService: DbService,private toastController: ToastController, public navCtrl: NavController) { 
    console.log('Pagina Login Iniciada');
  }

  ngOnInit() {
  }
//validador de correo y usuario//
  validarCredenciales() {
    this.dbService.ingresarLogin(this.modeloCorreo,this.modeloContrasena).then((data)=>{
      if(data){
        console.log('GCD: LOGUEADO');
        this.loginToast();
        localStorage.setItem('ingresado','true');
        //redirige a pagina principal
        this.navCtrl.navigateRoot('principal');
      }else{
        console.log('GCD: NO EXISTE ESE USUARIO');
        this.noExisteToast();
      }    
    });
  }
//Pop-up no existe
  async noExisteToast() {
    const toast = await this.toastController.create({
      message: 'Usuario o contraseña incorrecta!',
      duration: 2000,
      position: 'top' 
    });
    toast.present();
  } 
//Pop-up logueado
  async loginToast() {
    const toast = await this.toastController.create({
      message: 'Logueado!',
      duration: 2000,
      position: 'top' 
    });
    toast.present();
  } 

}
