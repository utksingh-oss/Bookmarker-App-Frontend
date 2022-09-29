import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ToReadPageComponent } from './components/to-read-page/to-read-page.component';
import { ReadPageComponent } from './components/read-page/read-page.component';

const routes: Routes = [
  {path: '' , redirectTo: 'home', pathMatch: 'full'},
	{path: 'home', component: MainPageComponent},
	{path: 'read-books', component: ReadPageComponent},
	{path: 'to-read-books', component: ToReadPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
