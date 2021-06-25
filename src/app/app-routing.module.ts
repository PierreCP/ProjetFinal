import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { EtalComponent } from './etal/etal.component';
import { MenuProducteurComponent } from './menu-producteur/menu-producteur.component';
import { ProdAutresComponent } from './prod-autres/prod-autres.component';
import { ProdBieresComponent } from './prod-bieres/prod-bieres.component';
import { ProdFromagesComponent } from './prod-fromages/prod-fromages.component';
import { ProdFruitsComponent } from './prod-fruits/prod-fruits.component';
import { ProdLegumesComponent } from './prod-legumes/prod-legumes.component';
import { ProdVinsComponent } from './prod-vins/prod-vins.component';

const routes: Routes = [
  { component: ConnexionComponent, path: 'login' },
  {component: MenuProducteurComponent, path: 'menu-prod', children: [
      { component: EtalComponent, path: 'etal' },
      { component: ProdVinsComponent, path: 'prod-vins' },
      { component: ProdAutresComponent, path: 'prod-autres' },
      { component: ProdFruitsComponent, path: 'prod-fruits' },
      { component: ProdLegumesComponent, path: 'prod-legumes' },
      { component: ProdBieresComponent, path: 'prod-bières' },
      { component: ProdFromagesComponent, path: 'prod-fromages' }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
