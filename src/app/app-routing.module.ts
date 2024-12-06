import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [

  //All routes are defined 
  { path: '', redirectTo: '/home', pathMatch: 'full' }, //it is neccessary to add, bcoz If no default route is set, Angular doesn't know what to display for the root path /.

  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path: 'services', component:ServicesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routingComponents = [HomeComponent, AboutComponent]