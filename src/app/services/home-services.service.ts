import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HomeServicesService {

  private token: string = '';

  constructor(private http: HttpClient) {
  }

  getCompetition(index: number) {
    let competition: string = '';
    switch (index) {
      case 0:
        competition = 'england-premier-league';
        break
      case 1:
        competition = 'italy-serie-a';
        break
      case 2:
        competition = 'spain-la-liga';
        break
      case 3:
        competition = 'germany-bundesliga';
        break
      case 4:
        competition = 'france-ligue-1';
        break
    }
    this.getCompetitionFeed(competition);
  }

  getTeam(index: number) {
    let team: string = 'token';
    switch (index) {
      case 0:
        team = 'alaves';
        break
      case 1:
        team = 'barcelona';
        break
      case 2:
        team = 'arsenal';
        break
      case 3:
        team = 'chelsea';
        break
      case 4:
        team = 'liverpool';
        break
      case 5:
        team = 'manchester-city';
        break
      case 6:
        team = 'manchester-united';
        break
      case 7:
        team = 'real-madrid';
        break
    }
    this.getTeamFeed(team);
  }

  getLastestFeed() {
    
    return this.http.get(`https://www.scorebat.com/video-api/v3/feed/?token=${this.token}`);
    // This endpoint returns a feed of videos from the latest and most relevant football matches. The endpoint is public so you can access it even with the free plan.
  }

  getCompetitionFeed (competition: string) {

    return this.http.get(`https://www.scorebat.com/video-api/v3/competition/${competition}/?token=${this.token}`);
    // You can query videos for each competition through the compeition endpoint.
  }

  getTeamFeed(team: string) {
    // https://www.scorebat.com/video-api/v3/team/real-madrid/?token=[YOUR_API_TOKEN]
    return this.http.get(`https://www.scorebat.com/video-api/v3/team/${team}/?token=${this.token}`);

  }
}
