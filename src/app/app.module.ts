import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import {
  HttpClientModule,
  provideHttpClient,
  withFetch,
} from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSliderModule } from '@angular/material/slider';

import { MatButtonModule } from '@angular/material/button';
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
import { HomeSideComponent } from './main-component/home/home-side/home-side.component';
import { MusicComponent } from './main-component/home/music/music.component';
import { PodcastComponent } from './main-component/home/podcast/podcast.component';
import { PlayComponent } from './main-component/home/play/play.component';
import { RouterModule } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FaqComponent } from './faq/faq.component';
import { SearchComponent } from './main-component/home/search/search.component';
import { GenreComponent } from './main-component/home/genre/genre.component';
import { ArtistComponent } from './main-component/home/artist/artist.component';
import { FilterComponent } from './main-component/home/filter/filter.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    MainComponentComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    HomeSideComponent,
    MusicComponent,
    PodcastComponent,
    PlayComponent,
    FaqComponent,
    SearchComponent,
    GenreComponent,
    ArtistComponent,
    FilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    NgxExtendedPdfViewerModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    MatSliderModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
    MatCardModule,
    BrowserAnimationsModule, 
    MatExpansionModule,
  ],
  exports: [MatSliderModule, MatIconModule, MatButtonModule],

  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
