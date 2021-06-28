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
<<<<<<< HEAD
import { ListeProducteurComponent } from './liste-producteur/liste-producteur.component';
=======
import { ProdBlanchesComponent } from './prod-bieres-blanches/prod-blanches.component';
import { ProdBrunesComponent } from './prod-bieres-brunes/prod-brunes.component';
import { ProdRoussesComponent } from './prod-bieres-rousses/prod-rousses.component';
import { ProdBlondesComponent } from './prod-bieres-blondes/prod-blondes.component';
import { ProdRougesComponent } from './prod-vins-rouges/prod-rouges.component';
import { ProdBlancsComponent } from './prod-vins-blancs/prod-blancs.component';
import { ProdRosesComponent } from './prod-vins-roses/prod-roses.component';
import { ProdChampagnesComponent } from './prod-vins-champagnes/prod-champagnes.component';
import { ProdRacinesComponent } from './prod-legumes-racines/prod-racines.component';
import { ProdChouxComponent } from './prod-legumes-choux/prod-choux.component';
import { ProdCourgesComponent } from './prod-legumes-courges/prod-courges.component';
import { ProdChampignonsComponent } from './prod-legumes-champignons/prod-champignons.component';
import { ProdAromatiquesComponent } from './prod-legumes-aromatiques/prod-aromatiques.component';
import { ProdLegumesfruitsComponent } from './prod-legumesfruits/prod-legumesfruits.component';
import { ProdLegumesfeuillesComponent } from './prod-legumesfeuilles/prod-legumesfeuilles.component';
import { ProdLegumesSecComponent } from './prod-legumes-sec/prod-legumes-sec.component';
import { ProdSaladesComponent } from './prod-legumes-salades/prod-salades.component';
>>>>>>> d7e3380ecb9d8308f7d3c7c9aaad42986d5ef54a


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
  {component: MurProducteurComponent, path: 'mur'},
<<<<<<< HEAD
  {component: ListeProducteurComponent, path: 'liste-prod'}
=======
  {component: ProdBlanchesComponent, path: 'prod-blanches'},
  {component: ProdBrunesComponent, path: 'prod-brunes'},
  {component: ProdRoussesComponent, path: 'prod-rousses'},
  {component: ProdBlondesComponent, path: 'prod-blondes'},
  {component: ProdRougesComponent, path: 'prod-rouges'},
  {component: ProdBlancsComponent, path: 'prod-blancs'},
  {component: ProdRosesComponent, path: 'prod-roses'},
  {component: ProdChampagnesComponent, path: 'prod-champagnes'},
  {component: ProdRacinesComponent, path: 'prod-racines'},
  {component: ProdChouxComponent, path: 'prod-choux'},
  {component: ProdCourgesComponent, path: 'prod-courges'},
  {component: ProdChampignonsComponent, path: 'prod-champignons'},
  {component: ProdAromatiquesComponent, path: 'prod-aromatiques'},
  {component: ProdLegumesfruitsComponent, path: 'prod-legumesFruits'},
  {component: ProdSaladesComponent, path: 'prod-salades'},
  {component: ProdLegumesfeuillesComponent, path: 'prod-legumesFeuilles'},
  {component: ProdLegumesSecComponent, path: 'prod-drupes'},
  {component: ProdLegumesSecComponent, path: 'prod-baies'},
  {component: ProdLegumesSecComponent, path: 'prod-pomes'},
  {component: ProdLegumesSecComponent, path: 'prod-agrumes'},
  {component: ProdLegumesSecComponent, path: 'prod-pepos'},
  {component: ProdLegumesSecComponent, path: 'prod-tropicaux'},
  {component: ProdLegumesSecComponent, path: 'prod-legumesSecs'},

>>>>>>> d7e3380ecb9d8308f7d3c7c9aaad42986d5ef54a

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
