import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ColorGridComponent } from './components/color-grid/color-grid.component';
import { PageNotFoundComponent } from '../shared/components/page-not-found/page-not-found.component';


const routes: Routes = [
	{
		path: '',
		component: PagesComponent,
		children: [
			{ path: 'colors', component: ColorGridComponent, data: {title: 'Color Grid'} },
			{ path: '', redirectTo: '/colors', pathMatch: 'full'},
			{ path: '**', component: PageNotFoundComponent}
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
