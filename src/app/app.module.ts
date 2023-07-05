import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './forms/login/login.component';
import { SignupComponent } from './forms/signup/signup.component';
import { AboutusComponent } from './home/aboutus/aboutus.component';
import { ContactusComponent } from './home/contactus/contactus.component';
import { CategoryComponent } from './home/category/category.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home/home.component';
import { TopBarComponent } from './sharedComponent/top-bar/top-bar.component';
import { LeftNavBarComponent } from './sharedComponent/left-nav-bar/left-nav-bar.component';
import { LayoutComponent } from './layout/layout.component';
import { LogoComponent } from './sharedComponent/logo/logo.component';
import { FooterComponent } from './sharedComponent/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AboutusComponent,
    ContactusComponent,
    CategoryComponent,
    HomeComponent,
    TopBarComponent,
    LeftNavBarComponent,
    LayoutComponent,
    LogoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
