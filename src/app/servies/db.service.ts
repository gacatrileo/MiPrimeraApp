import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private router: Router, private sqlite: SQLite) { 
    this.sqlite.create({
      name: 'datos.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('CREATE TABLE IF NOT EXISTS USUARIO(MAIL VARCHAR(75), CONTRASENA VARCHAR(30))', []).then(()=>{
        console.log('GCD: TABLA CREADA OK');
      }).catch(e =>{
        console.log('GCD: TABLA NOK');
      })
    }).catch(e=>{
      console.log('GCD: BASE DE DATOS NOK');
    });
  }
  
  almacenarUsuario(correo: String, contrasena: String){
    this.sqlite.create({
      name: 'datos.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('INSERT INTO USUARIO VALUES(?, ?)', [correo, contrasena]).then(()=>{
        console.log('GCD: USUARIO ALMACENADO OK');
      }).catch(e =>{
        console.log('GCD: USUARIO NO ALMACENADO');
      })
    }).catch(e=>{
      console.log('GCD: BASE DE DATOS NOK');
    });
  }

  validarCorreo(correo: String){
    return this.sqlite.create({
      name: 'datos.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      return db.executeSql('SELECT COUNT(MAIL) AS CANTIDAD FROM USUARIO WHERE MAIL = ?', [correo]).then((data)=>{
        if (data.rows.item(0).CANTIDAD === 0){
          return true; //NO EXISTE CORREO
        }
        return false; // YA EXISTE CORREO
      }).catch(e =>{
        return false; // FALLO CONSULTA
      })
    }).catch(e=>{
      return false; // FALLO BASE DE DATOS
    });
  }


  canActivate(){
    this.router.navigate(['login']);
    return false;
  }
}

