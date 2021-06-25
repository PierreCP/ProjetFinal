import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtalComponent } from './etal/etal.component';
import { MenuProducteurComponent } from './menu-producteur/menu-producteur.component';

const routes: Routes = [
  {component: MenuProducteurComponent, path:'menu-prod'},
  {component: EtalComponent, path:'etal'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
