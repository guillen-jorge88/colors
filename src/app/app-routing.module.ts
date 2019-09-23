import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './modules/shared/components/page-not-found/page-not-found.component';


const routes: Routes = [
  
];
// { path: 'home', component: HomeComponent, data: {title: 'Color Grid'} }
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
