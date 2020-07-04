import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPagLayoutComponent } from './components/menu-pag-layout/menu-pag-layout.component';
import { SobrePageComponent } from './components/sobre-page/sobre-page.component';
import { ProfissionaisPageComponent } from './components/profissionais-page/profissionais-page.component';


const routes: Routes = [
  {
    path: '', component: MenuPagLayoutComponent,
    children: [
      { path: '', component: ProfissionaisPageComponent },
      { path: 'sobre', component: SobrePageComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
