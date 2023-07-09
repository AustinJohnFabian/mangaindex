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
import { ComicDetailCardComponent } from './sharedComponent/comic-detail-card/comic-detail-card.component';
import { MangasService } from './manga collections/mangas.service';
import { SearchComponent } from './home/search/search.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComicInfoComponent } from './home/comic-info/comic-info.component';
import { ComicByTypeComponent } from './home/comic-by-type/comic-by-type.component';
import { UserService } from './service/user.service';
import { WeeklyPopularComponent } from './sharedComponent/weekly-popular/weekly-popular.component';

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
    FooterComponent,
    ComicDetailCardComponent,
    SearchComponent,
    ComicInfoComponent,
    ComicByTypeComponent,
    WeeklyPopularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    
  ],
  providers: [
    MangasService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
