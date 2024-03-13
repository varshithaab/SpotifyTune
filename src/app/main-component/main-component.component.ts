import { Component } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrl: './main-component.component.css',
})
export class MainComponentComponent {
  content: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.array();
  }
  array() {
    this.content = [
      {
        title: 'Play your favorites.',
        des: 'Listen to the songs you love, and discover new music and podcasts.',
      },
      {
        title: 'Playlists made easy.',
        des: `We'll help you make playlists.`,
      },
      {
        title: 'Effortless Content Filtering',
        des: 'Simplify your filtering experience with ease.',
      },
      {
        title: 'Unlock Premium Features',
        des: `Upgrade for ad-free music, skips, offline listening, and exclusive features.`,
      },
    ];
  }
}
