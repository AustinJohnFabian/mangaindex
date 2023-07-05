import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './forms/login/login.component';
import { SignupComponent } from './forms/signup/signup.component';
import { HomeComponent } from './home/home/home.component';
import { AboutusComponent } from './home/aboutus/aboutus.component';
import { ContactusComponent } from './home/contactus/contactus.component';
import { CategoryComponent } from './home/category/category.component';

const routes: Routes = [

  {path: '', component:HomeComponent},
  {path: 'home', component:HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'about', component:AboutusComponent},
  {path: 'contact', component:ContactusComponent},
  {path: 'category', component:CategoryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
