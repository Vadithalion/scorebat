import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HomeServicesService {

  private token: string = 'MjU4NDJfMTY2MjM5NDIxMV84ZDJiZjhhMTJlZmYzNWJiYjEzYjQ1NGYxNWRkODU2NjExMWVhYjRk';
  private token2: string = 'MjU4NDJfMTY2MjM5MzgxNV83MTdiZjQ0OGZjYzNiNDA4YTQ1MTYzYzE2ZDViMjU1NDc1NGZjYzQ0';

  constructor(private http: HttpClient) {
  }

  getLastestFeed() {
    return this.http.get(`https://www.scorebat.com/video-api/v3/feed/?token=[${this.token}]`);
    // This endpoint returns a feed of videos from the latest and most relevant football matches. The endpoint is public so you can access it even with the free plan.
  }

  getCompetitionFeed (competition: string) {

    return this.http.get(`https://www.scorebat.com/video-api/v3/competition/${competition}/?token=[${this.token}]`);
    // You can query videos for each competition through the compeition endpoint.
  }

  getTeamFeed(team: string) {
    return this.http.get(`https://www.scorebat.com/video-api/v3/team/${team}/?token=[${this.token}]`);
  }
}
