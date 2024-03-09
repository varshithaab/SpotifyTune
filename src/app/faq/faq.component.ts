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
      question: 'How do I follow an artist?',
      answer: 'To follow an artist, search for the artist\'s name, then tap on the artist profile. From there, you should see a "Follow" button. Tap on it to start following the artist and receive updates about their latest releases and activities.',
      expanded: false
    },
    {
      question: 'How can I discover new music?',
      answer: 'Spotify offers various ways to discover new music. You can explore curated playlists, such as "Discover Weekly" and "Release Radar," which are personalized based on your listening preferences. Additionally, you can browse through genres, explore recommendations, and follow your friends\' playlists.',
      expanded: false
    },
    {
      question: 'Can I listen to music offline?',
      answer: 'Yes, Spotify Premium subscribers can download music and podcasts for offline listening. Simply find the content you want to download, then tap the download icon. Once downloaded, you can listen to your downloaded content without an internet connection.',
      expanded: false
    },
    {
      question: 'How do I change my profile picture?',
      answer: 'To change your profile picture on Spotify, go to your profile page and tap on the Edit Profile button. From there, you can upload a new profile picture from your device or choose one from your existing photos.',
      expanded: false
    },
    {
      question: 'What is Spotify Connect?',
      answer: 'Spotify Connect allows you to seamlessly switch playback between different devices. For example, you can start listening to music on your phone and then transfer playback to your home speakers or other connected devices without interrupting the music.',
      expanded: false
    },
    {
      question: 'How do I clear my search history?',
      answer: 'To clear your search history on Spotify, go to your settings and scroll down to the Privacy section. From there, you can find the option to clear your search history.',
      expanded: false
    },
    {
      question: 'Can I listen to podcasts on Spotify?',
      answer: 'Yes, Spotify offers a wide range of podcasts on various topics, including news, entertainment, education, and more. You can find podcasts by searching for specific titles or browsing through curated collections and recommendations.',
      expanded: false
    },
    {
      question: 'How do I share music with friends?',
      answer: 'To share music with friends on Spotify, find the song, album, or playlist you want to share, then tap on the "..." button next to it. From there, you should see an option to share the content via various channels, such as messaging apps or social media platforms.',
      expanded: false
    },
    {
      question: 'How do I cancel my Spotify subscription?',
      answer: 'To cancel your Spotify subscription, go to your account settings and navigate to the subscription section. From there, you should find an option to cancel your subscription. Follow the prompts to confirm the cancellation.',
      expanded: false
    },
    // Add more FAQ items here...
  ];

  toggleAccordion(item: FaqItem): void {
    item.expanded = !item.expanded;
  }
}
