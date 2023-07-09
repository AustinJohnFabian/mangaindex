import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './forms/login/login.component';
import { SignupComponent } from './forms/signup/signup.component';
import { HomeComponent } from './home/home/home.component';
import { AboutusComponent } from './home/aboutus/aboutus.component';
import { ContactusComponent } from './home/contactus/contactus.component';
import { CategoryComponent } from './home/category/category.component';
import { SearchComponent } from './home/search/search.component';
import { ComicInfoComponent } from './home/comic-info/comic-info.component';
import { ComicByTypeComponent } from './home/comic-by-type/comic-by-type.component';

const routes: Routes = [

  {path: '', component:HomeComponent},
  {path: 'home', component:HomeComponent},
  {path: 'search', component: SearchComponent},
  {path: 'login', component:LoginComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'about', component:AboutusComponent},
  {path: 'contact', component:ContactusComponent},
  {path: 'category', component:CategoryComponent},
  {path: 'comic-info/:title', component:ComicInfoComponent},
  {path: 'comics-by-type/:type', component: ComicByTypeComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
