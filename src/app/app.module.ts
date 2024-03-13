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

import { MatMenuModule } from '@angular/material/menu';

import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { HomeComponent } from './main-component/home/home.component';

import { HeaderComponent } from './main-component/header/header.component';
import { FooterComponent } from './main-component/footer/footer.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { NavigationComponent } from './navigation/navigation.component';






import { HomeSideComponent } from './main-component/home/home-side/home-side.component';
import { MusicComponent } from './main-component/home/music/music.component';
import { PodcastComponent } from './main-component/home/podcast/podcast.component';
import { PlayComponent } from './main-component/home/play/play.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MylibraryComponent } from './main-component/home/mylibrary/mylibrary.component';
import { CreatePlaylistComponent } from './main-component/home/create-playlist/create-playlist.component';
import { CustomerSupportComponent } from './main-component/home/customer-support/customer-support.component';
import { FaqComponent } from './faq/faq.component';
import { SearchComponent } from './main-component/home/search/search.component';
import { GenreComponent } from './main-component/home/genre/genre.component';
import { ArtistComponent } from './main-component/home/artist/artist.component';
import { FilterComponent } from './main-component/home/filter/filter.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './main-component/login/login.component';
import { RegisterComponent } from './main-component/register/register.component';
import { UserManagementComponent } from './navigation/user-management/user-management.component';
import { SongManagementComponent } from './navigation/song-management/song-management.component';
import { ViewuserComponent } from './navigation/user-management/viewuser/viewuser.component';
import { DeleteuserComponent } from './navigation/user-management/deleteuser/deleteuser.component';
import { EdituserComponent } from './navigation/user-management/edituser/edituser.component';
import { ViewsongsComponent } from './navigation/song-management/viewsongs/viewsongs.component';
import { DeletesongsComponent } from './navigation/song-management/deletesongs/deletesongs.component';

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
    MylibraryComponent,
    CreatePlaylistComponent,
    CustomerSupportComponent,
    
    FaqComponent,
    SearchComponent,
    GenreComponent,
    ArtistComponent,
    FilterComponent,
    LoginComponent,
    RegisterComponent,
    UserManagementComponent,
    SongManagementComponent,
    ViewuserComponent,
    DeleteuserComponent,
    EdituserComponent,
    ViewsongsComponent,
    DeletesongsComponent,
    
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
  
    ReactiveFormsModule,
    HttpClientModule,
    MatMenuModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
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
