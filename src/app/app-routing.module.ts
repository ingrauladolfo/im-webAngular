import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaComponent } from './components/acerca/acerca.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { JuegaComponent } from './components/juega/juega.component';

const routes: Routes = [
  { 
    path: '', component: InicioComponent 
  },{ 
    path: 'acerca-de', component: AcercaComponent 
  },{
    path: 'nuestro-catalogo', component: CatalogoComponent
  },{
    path: 'juega', component: JuegaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
