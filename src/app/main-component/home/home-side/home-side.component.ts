import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { SearchBarService } from '../../../services/search-bar.service';
import { Song } from '../../../shared/models/song';

import { SongService } from '../../../services/song.service';
@Component({
  selector: 'app-home-side',
  templateUrl: './home-side.component.html',
  styleUrl: './home-side.component.css'
})
export class HomeSideComponent {
  cards: any[] = [];
  artist:any[]=[];
  podcast:any[]=[];
  constructor() { }

  ngOnInit(): void {
    this.array()
  }
  array(){
      this.cards=[
        {  
          image: "assets/img1.jpg",
          title: "O Maahi",
          artist: "Arijit Singh",
          album: "Dunki(2023)",
          genre: "melody",
          audio: "assets/snog1.mp3"
        },
        {
          
          image: "assets/img2.jpg",
          title: "Apna Bana",
          artist: "Arijit Singh, Sachin Jigar",
          album: "Bhediya (2022)",
          genre: "melody",
          audio: "assets/song4.mp3"
        },
        {
          image: "assets/img3.jpg",
          title: "Ankhon Mein Teri",
          artist: "Song by KK",
          album: "Om Shanthi Om(2007)",
          genre: "melody",
          audio: "assets/song1.mp3"
        },
        {
          image: "assets/img4.jpg",
          title: "Kesariya",
          artist: "Arijit Singh",
          album: "Brahmastra(2022)",
          genre: "melody",
          audio: "assets/song4.mp3"
        },
        {
          image: "assets/img5.jpg",
          title: "Pehle Bhi Main",
          artist: "Vishal Mishra",
          album: "Animal(2023)",
          genre: "folk",
          audio: "assets/song1.mp3"
        },
        {
          image: "assets/img6.jpg",
          title: "Tere Hawaale",
          artist: "Shilpa Rao",
          album: "Lal Singh Chaddha(2022)",
          genre: "folk",
          audio: "assets/song4.mp3"
        },
       
        
      ] 
      ,
      this.podcast=[
        
{
  image:"assets/pod1.jpg",
title:"Laugh Factory",
artist:"Stand-up Comedians",
album:"Live Shows",
genre:"Comedy",
audio:"laugh_factory.mp3"
},

  {
    image:"assets/pod2.jpg",
      title: "Crime Chronicles",
      artist: "Crime Journalists",
      album: "Investigative Reports",
      genre: "True Crime",
      audio: "crime_chronicles.mp3",
     
  },
  {
    image:"assets/pod3.jpg",
      title: "Forensic Files",
      artist: "Forensic Experts",
      album: "Crime Lab Chronicles",
      genre: "True Crime",
      audio: "forensic_files.mp3",
      
  },
  {
    image:"assets/pod4.jpg",
      title: "Humor Haven",
      artist: "Chuckles Crew",
      album: "Comedy Gold",
      genre: "Comedy",
      audio: "humor_haven.mp3",
      
  },
  {
    image:"assets/pod5.jpg",
      title: "Murder Mysteries",
      artist: "Crime Scene Investigators",
      album: "Unsolved Cases",
      genre: "True Crime",
      audio: "murder_mysteries.mp3",
     
  },
  {
    image:"assets/pod6.jpg",
      title: "Tech Talk",
      artist: "Tech Enthusiasts",
      album: "Innovation Hour",
      genre: "Technology",
      audio: "tech_talk.mp3",
     
  }


      ]
      this.artist=[
        {
          image:"assets/arijit.jpg",
          name:"ArijitSingh"
        },
        {
          image:"assets/kk.jpg",
          name:"KK"
        },{
          image:"assets/sachinJigar.jpg",
          name:"Sachin And Jigar"
        },{
          image:"assets/shilparao.jpg",
          name:"ShilpaRao"
        },{
          image:"assets/shreya.jpg",
          name:"Shreya Ghoshal"
        },{
          image:"assets/vishal-mishra.jpg",
          name:"VishalMishra"
        }
      ]
  }

}
