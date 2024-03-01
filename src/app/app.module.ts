import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
<<<<<<< HEAD
=======
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
>>>>>>> 5103d3e56899f78e76f1a5fedf67bfb4fa9a9d48
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { HomeComponent } from './main-component/home/home.component';
<<<<<<< HEAD
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


=======
import { MusicComponent } from './main-component/home/music/music.component';
import { PodcastComponent } from './main-component/home/podcast/podcast.component';
import { PlayComponent } from './main-component/home/play/play.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
>>>>>>> 5103d3e56899f78e76f1a5fedf67bfb4fa9a9d48

@NgModule({
  declarations: [
    AppComponent,
    MainComponentComponent,
    HomeComponent,
<<<<<<< HEAD
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    HomeSideComponent,
    FaqComponent,
   
  
   

   
  
   
=======
    MusicComponent,
    PodcastComponent,
    PlayComponent,
>>>>>>> 5103d3e56899f78e76f1a5fedf67bfb4fa9a9d48
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    NgxExtendedPdfViewerModule,
HttpClientModule
=======
    HttpClientModule,
    FormsModule,
    RouterModule,
    MatSliderModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
    MatCardModule,

>>>>>>> 5103d3e56899f78e76f1a5fedf67bfb4fa9a9d48
  ],
  exports: [
    MatSliderModule,
    MatIconModule,
    MatButtonModule
  ],
  
  providers: [
<<<<<<< HEAD
    SearchService
=======
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch())
>>>>>>> 5103d3e56899f78e76f1a5fedf67bfb4fa9a9d48
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
