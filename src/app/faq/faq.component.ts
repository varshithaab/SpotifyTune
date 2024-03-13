import { Component } from '@angular/core';

interface FaqItem {
  question: string;
  answer: string;
  expanded: boolean;
}

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  faqItems: FaqItem[] = [
    {
      question: 'How do I create a playlist?',
      answer: 'Playlist are a great way to save collections of music, either for your own listening or to share. To create one, tap your Library, then tap CREATE. Give your playlist a name, and start adding songs (and we\'ll help you along).',
      expanded: false
    },
    {
      question: 'How do I search for songs on the app?',
      answer: 'To search for songs, simply type keywords related to the song, artist, album, or genre you are looking for into the search bar . Press enter or click the search icon to see the results. You can then scroll through the search results to find the desired songs.',
      expanded: false
    },
    {
      question: 'Can I listen to podcasts on SpotifyTune?',
      answer: 'Yes, Spotify offers a wide range of podcasts on various topics, including news, entertainment, education, and more. You can find podcasts by searching for specific titles or browsing through curated collections and recommendations.',
      expanded: false
    },
    {
      question: 'How do I use the filter function on SpotifyTune?',
      answer: 'To use the filter function on SpotifyTune, navigate to the filter options available in the website. Depending on the context, you may be able to filter search results by various criteria such as genre and artist. Simply select your desired filters to refine the results according to your preferences.',
      expanded: false
    },
    {
      question: 'How do I subscribe to SpotifyTune?',
      answer: 'To subscribe to SpotifyTune, visit the SpotifyTune website. Click on the "Sign Up" or "Subscribe" button, and then follow the prompts to create an account and choose a subscription plan. Once subscribed, you can enjoy all the features and benefits of SpotifyTune Premium.',
      expanded: false

    },
    {
      question: 'How do I play songs on the website?',
      answer: 'To play a song, simply navigate to the song you want to listen to and click on its title or cover image. This will start playback of the song. You can control playback using the playback controls provided, such as play, pause, skip forward, and skip backward.',
      expanded: false
    },{
    question: 'How do I access my library?',
      answer: 'To access your library, navigate to the "My Library" section of the app. This section typically contains all the songs, albums, playlists, and other content that you have saved or added to your library. You can organize and manage your library to easily find your favorite content.',
      expanded: false
    }
    
  ];

  toggleAccordion(item: FaqItem): void {
    item.expanded = !item.expanded;
  }
}
