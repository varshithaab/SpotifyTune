
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicComponent } from './main-component/home/music/music.component';
import { PlayComponent } from './main-component/home/play/play.component';
import { PodcastComponent } from './main-component/home/podcast/podcast.component';
import { MylibraryComponent } from './main-component/home/mylibrary/mylibrary.component';
import { CreatePlaylistComponent } from './main-component/home/create-playlist/create-playlist.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { HomeComponent } from './main-component/home/home.component';
import { fileURLToPath } from 'url';
import { FilterComponent } from './main-component/home/filter/filter.component';
import { GenreComponent } from './main-component/home/genre/genre.component';
import { HomeSideComponent } from './main-component/home/home-side/home-side.component';
import { FaqComponent } from './faq/faq.component';
import { CustomerSupportComponent } from './main-component/home/customer-support/customer-support.component';
import { LoginComponent } from './main-component/login/login.component';
import { register } from 'module';
import { RegisterComponent } from './main-component/register/register.component';
import { UserManagementComponent } from './navigation/user-management/user-management.component';
import { SongManagementComponent } from './navigation/song-management/song-management.component';
import { ViewuserComponent } from './navigation/user-management/viewuser/viewuser.component';
import { DeleteuserComponent } from './navigation/user-management/deleteuser/deleteuser.component';
import { EdituserComponent } from './navigation/user-management/edituser/edituser.component';
import { ViewsongsComponent } from './navigation/song-management/viewsongs/viewsongs.component';
import { DeletesongsComponent } from './navigation/song-management/deletesongs/deletesongs.component';


const routes: Routes = [
  { path: '', component: MainComponentComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'filter', pathMatch: 'full' }, // Default route
      { path: 'filter', component: FilterComponent },
      { path: 'genre', component: GenreComponent },
    ]
  },


  { path: 'faq', component: FaqComponent },
  { path: 'search/:searchTerm', component: HomeComponent },
  {path:'',component:MainComponentComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:RegisterComponent},
  { path: 'faq', component: FaqComponent }, 
  {path:'search/:searchTerm',component:HomeComponent},
  { path: 'genre/:genre', component: HomeComponent },
  { path: 'artist/:artist', component: HomeComponent },
  // { path: 'home/filter', component: HomeComponent },
// {path:'filter',component:FilterComponent},
//  { path: 'genre', component: GenreComponent },
  { path: 'music', component: MusicComponent},
  {path:'music/:music',component:MusicComponent},
  { path: 'podcast', component: PodcastComponent },
  { path: 'play/:musicId', component: PlayComponent },

  { path: 'play/music/:musicId', component: PlayComponent },
  {path:'podcast',component:PodcastComponent},
  {path :'library',component:MylibraryComponent},
  {path:'createplaylist',component:CreatePlaylistComponent},
  {path:'library/:musicId',component:MylibraryComponent},
  {path:'support',component:CustomerSupportComponent},
  { path: 'play/:id', component: PlayComponent },
  {path:'user-management' , component : UserManagementComponent},
  {path:'song-management' , component : SongManagementComponent},
  { path: 'viewuser', component: ViewuserComponent },
  { path: 'deleteuser', component: DeleteuserComponent },
  { path: 'edituser', component: EdituserComponent },
  {path:'viewsongs' , component:ViewsongsComponent},
  {path:'deletesongs' , component:DeletesongsComponent},
  {path:'main-component',component:MainComponentComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
