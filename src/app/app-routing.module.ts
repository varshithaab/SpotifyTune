import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main-component/home/home.component';
import { MainComponentComponent } from './main-component/main-component.component';

const routes: Routes = [
  
  { path: '', component: MainComponentComponent },
  { path: 'login', component:HomeComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
