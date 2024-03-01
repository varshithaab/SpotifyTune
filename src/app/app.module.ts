import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { HomeComponent } from './main-component/home/home.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './main-component/header/header.component';
import { FooterComponent } from './main-component/footer/footer.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { NavigationComponent } from './navigation/navigation.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';


import { GenericListFilterModule } from 'generic-list-filter';

import { SearchService } from '../app/services/search.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeSideComponent } from './main-component/home/home-side/home-side.component';
import { FaqComponent } from './main-component/home/faq/faq.component';



@NgModule({
  declarations: [
    AppComponent,
    MainComponentComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    HomeSideComponent,
    FaqComponent,
   
  
   

   
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    NgxExtendedPdfViewerModule,
HttpClientModule
  ],
  providers: [
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
