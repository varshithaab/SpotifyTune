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
          title: "Inkem Kaavaale",
          artist: "Sid Sriram",
          album: "Geetha Govindam",
          genre: "Nostalgic",
          audio: "assets/song2.mp3"
        },
        {
         
          title: "Bad Boy",
          artist: "Badshah",
          album: "Saaho",
          image: "assets/img8.jpg",
          genre: "Energetic",
          audio: "assets/song8.mp3"
        },
       
       
        {
          title: "ButtaBomma",
          artist: "Armaan Malik",
          album: "Ala Vaikunthapurramuloo",
          image: "assets/img4.jpg",
          genre: "Energetic",
          audio: "assets/song4.mp3"
        },
        {
          title: "Manohari",
          artist: "Mohana Bhogaraju",
          album: "Bahubali: The Beginning",
          image: "assets/img10.jpg",
          genre: "Enthusiastic",
          audio: "assets/song10.mp3"
          },
          {
            title: "Tum Mile",
            artist: "Neeraj Shridhar",
            album: "Tum Mile",
            image: "assets/img14.jpg",
            genre: "Soulful",
            audio: "assets/song14.mp3"
            },
            {
              title: "Shape of You",
              artist: "Ed Sheeran",
              album: "÷",
              image: "assets/img17.jpg",
              genre: "Upbeat",
              audio: "assets/song17.mp3"
              }

        
        
      ]
          
        
        
        
      
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
    "title": "Gadget Geek",
    "artist": "Tech Reviewers",
    "album": "Latest Tech Trends",
    "image": "assets/pod13.jpg",
    "genre": "Technology",
    "audio": "assets/pod13.mp3"
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
