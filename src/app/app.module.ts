import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { HomeComponent } from './main-component/home/home.component';
import { MusicComponent } from './main-component/home/music/music.component';
import { PodcastComponent } from './main-component/home/podcast/podcast.component';
import { PlayComponent } from './main-component/home/play/play.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MylibraryComponent } from './main-component/home/mylibrary/mylibrary.component';
import { CreatePlaylistComponent } from './main-component/home/create-playlist/create-playlist.component';
import { CustomerSupportComponent } from './main-component/home/customer-support/customer-support.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponentComponent,
    HomeComponent,
    MusicComponent,
    PodcastComponent,
    PlayComponent,
    MylibraryComponent,
    CreatePlaylistComponent,
    CustomerSupportComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
    MatCardModule,

  ],
  exports: [
    MatSliderModule,
    MatIconModule,
    MatButtonModule
  ],
  
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
