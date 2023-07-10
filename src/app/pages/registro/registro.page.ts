import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/servies/db.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  modeloCorreo: string = '';
  modeloContrasena: string ='';

  constructor(private dbService: DbService, private toastController: ToastController) { 
    console.log('Pagina Registro Iniciada');
  }

  ngOnInit() {
  }

  almacenarUsuario(){
    //console.log('GCD: ALMACENAR VALUES ', this.modeloCorreo, ' AND ',  this.modeloContrasena );
    this.dbService.validarCorreo(this.modeloCorreo).then((data)=>{
      if(data){
        console.log('GCD: SE GUARDA');
        this.creadoToast();
        this.dbService.almacenarUsuario(this.modeloCorreo,this.modeloContrasena);
      }else{
        console.log('GCD: NO SE GUARDA, YA EXISTE');
        this.correoToast();
      }
      
    });
  }

  async correoToast() {
    const toast = await this.toastController.create({
      message: 'Correo ya existe!',
      duration: 2000,
      position: 'top' 
    });
    toast.present();
  } 

  async creadoToast() {
    const toast = await this.toastController.create({
      message: 'Usuario creado con exito!',
      duration: 2000,
      position: 'top' 
    });
    toast.present();
  } 

}
