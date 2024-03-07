// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicComponent } from './main-component/home/music/music.component';
import { PlayComponent } from './main-component/home/play/play.component';
import { PodcastComponent } from './main-component/home/podcast/podcast.component';

const routes: Routes = [
  { path: 'music', component: MusicComponent },
  { path: 'podcast', component: PodcastComponent },
  { path: 'play/music/:musicId', component: PlayComponent },
  { path: 'play/podcast/:podcastId', component: PlayComponent },
  { path: 'play/:musicId', component: PlayComponent },
  // {path: 'play/', component:PlayComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
