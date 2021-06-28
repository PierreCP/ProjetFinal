import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { EtalComponent } from './etal/etal.component';
import { MenuProducteurComponent } from './menu-producteur/menu-producteur.component';
import { MurProducteurComponent } from './mur-producteur/mur-producteur.component';
import { ProdAutresComponent } from './prod-autres/prod-autres.component';
import { ProdBieresComponent } from './prod-bieres/prod-bieres.component';
import { ProdFromagesComponent } from './prod-fromages/prod-fromages.component';
import { ProdFruitsComponent } from './prod-fruits/prod-fruits.component';
import { ProdLegumesComponent } from './prod-legumes/prod-legumes.component';
import { ProdVinsComponent } from './prod-vins/prod-vins.component';
import { Test123Component } from './test123/test123.component';
import { MenuConsommateurComponent } from './menu-consommateur/menu-consommateur.component';


const routes: Routes = [
  { component: ConnexionComponent, path: 'login' },
  { component: MenuProducteurComponent, path: 'menu-prod' },
  { component: EtalComponent, path: 'etal', children: [
    { component: ProdVinsComponent, path: 'prod-vins' },
    { component: ProdAutresComponent, path: 'prod-autres' },
    { component: ProdFruitsComponent, path: 'prod-fruits' },
    { component: ProdLegumesComponent, path: 'prod-legumes' },
    { component: ProdBieresComponent, path: 'prod-bieres' },
    { component: ProdFromagesComponent, path: 'prod-fromages'},
    { component: Test123Component, path: 'pagetest123'},
  ]},
  {component: AccueilComponent, path: 'accueil'},
  {component: MenuConsommateurComponent, path: 'menu-cons'},

  { component: EtalComponent, path: 'etal' },
  { component: ProdVinsComponent, path: 'prod-vins' },
  { component: ProdAutresComponent, path: 'prod-autres' },
  { component: ProdLegumesComponent, path: 'prod-legumes' },
  { component: ProdBieresComponent, path: 'prod-bieres' },
  { component: ProdFromagesComponent, path: 'prod-fromages' },
  { component: Test123Component, path: 'test' },
  { component: AccueilComponent, path: 'accueil' },
  { component: MenuConsommateurComponent, path: 'menu-cons' },
  { component: ProdFruitsComponent, path: 'prod-fruits' },
  {component: MurProducteurComponent, path: 'mur'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
