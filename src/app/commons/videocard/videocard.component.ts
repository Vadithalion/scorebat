import { Component, Input, OnInit } from '@angular/core';
import { LastFeedModel } from 'src/app/models/lastFeed.model';

@Component({
  selector: 'app-videocard',
  templateUrl: './videocard.component.html',
  styleUrls: ['./videocard.component.scss']
})
export class VideocardComponent implements OnInit {

  @Input() latestFeedData: LastFeedModel;

  public cardData: any;
  public player: boolean = false;
  public videoData: string;

  constructor() { }

  ngOnInit(): void {
    this.getUrl();
  }
  
  public openPlayer () {
    this.player = true;
  }

  public closePlayer () {
    this.player = false;
    console.log(this.player);
  }

  public getUrl () {
    // let parsedUrl = this.latestFeedData.response.videos.embed.replace('\'', '');

  }
  
}
