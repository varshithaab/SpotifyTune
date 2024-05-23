import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicComponent } from './main-component/home/music/music.component';
import { PlayComponent } from './main-component/home/play/play.component';
import { PodcastComponent } from './main-component/home/podcast/podcast.component';
import { MylibraryComponent } from './main-component/home/mylibrary/mylibrary.component';
import { CreatePlaylistComponent } from './main-component/home/create-playlist/create-playlist.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { HomeComponent } from './main-component/home/home.component';
import { FilterComponent } from './main-component/home/filter/filter.component';
import { GenreComponent } from './main-component/home/genre/genre.component';
import { HomeSideComponent } from './main-component/home/home-side/home-side.component';
import { FaqComponent } from './faq/faq.component';
import { SearchComponent } from './main-component/home/search/search.component';
import { CustomerSupportComponent } from './main-component/home/customer-support/customer-support.component';
import { LoginComponent } from './main-component/login/login.component';
import { RegisterComponent } from './main-component/register/register.component';
import { UserManagementComponent } from './navigation/user-management/user-management.component';
import { SongManagementComponent } from './navigation/song-management/song-management.component';
import { ViewuserComponent } from './navigation/user-management/viewuser/viewuser.component';
import { DeleteuserComponent } from './navigation/user-management/deleteuser/deleteuser.component';
import { EdituserComponent } from './navigation/user-management/edituser/edituser.component';
import { ViewsongsComponent } from './navigation/song-management/viewsongs/viewsongs.component';
import { DeletesongsComponent } from './navigation/song-management/deletesongs/deletesongs.component';
import { PremiumPlansComponent } from './main-component/home/premium-plans/premium-plans.component';
import { PaymentFormComponent } from './main-component/home/payment-form/payment-form.component';
import { RecieptComponent } from './main-component/home/reciept/reciept.component';

const routes: Routes = [
  { path: '', component: MainComponentComponent },
  { path: 'home', component: HomeComponent, children: [
    { path: 'filter', component: FilterComponent },
    { path: 'filter/genre', component: GenreComponent },
    { path: 'filter/artist', component: FilterComponent },
    { path: 'music', component: MusicComponent },
    { path: 'music/:musicId', component: MusicComponent },
    { path: 'podcast', component: PodcastComponent },
    { path: 'createplaylist', component: CreatePlaylistComponent },
   
   
  ]},
  // { path: 'filter', component: FilterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: RegisterComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'search/:searchTerm', component: HomeComponent },
  { path: 'genre/:genre', component: HomeComponent },
  { path: 'artist/:artist', component: HomeComponent },
  { path: 'play/:musicId', component: PlayComponent },
  {path:'play/:podcastId',component:PlayComponent},
  { path: 'play/podcast/:podcastId', component: PlayComponent },
  { path: 'library', component: MylibraryComponent },
  { path: 'library/:musicId', component: MylibraryComponent },
  {path: 'premium-plans', component: PremiumPlansComponent},
  {path : 'payment-form', component: PaymentFormComponent},
  {path :'reciept', component: RecieptComponent},
  { path: 'user-management', component: UserManagementComponent },
  { path: 'song-management', component: SongManagementComponent },
  { path: 'viewuser', component: ViewuserComponent },
  { path: 'deleteuser', component: DeleteuserComponent },
  { path: 'edituser', component: EdituserComponent },
  { path: 'viewsongs', component: ViewsongsComponent },
  { path: 'deletesongs', component: DeletesongsComponent },
  { path: 'support', component: CustomerSupportComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
