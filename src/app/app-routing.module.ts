import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DbService } from './servies/db.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'perfil',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'favoritos',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'pokemones',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'registro',
    redirectTo: 'registro',
    pathMatch: 'full'
  },
  {
    path: 'principal',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'e404',
    pathMatch: 'full'
  },
  
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./pages/principal/principal.module').then( m => m.PrincipalPageModule),
    canActivate: [DbService]
  },

  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'pokemones',
    loadChildren: () => import('./pages/pokemones/pokemones.module').then( m => m.PokemonesPageModule),
    canActivate: [DbService]
  },
  {
    path: 'favoritos',
    loadChildren: () => import('./pages/favoritos/favoritos.module').then( m => m.FavoritosPageModule),
    canActivate: [DbService]
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule),
    canActivate: [DbService]
  },
  {
    path: 'pokedex',
    loadChildren: () => import('./pages/pokedex/pokedex.module').then( m => m.PokedexPageModule),    
    canActivate: [DbService]
  },
  {
    path: 'e404',
    loadChildren: () => import('./pages/e404/e404.module').then( m => m.E404PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
