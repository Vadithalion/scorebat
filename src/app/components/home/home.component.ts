import { Component, OnInit } from '@angular/core';
import { LastFeedModel } from 'src/app/models/lastFeed.model';
import { HomeServicesService } from 'src/app/services/home-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public latestFeedData: any = []
  public compData: any = {};
  public teamData: any = {};

  constructor(private homeServicesService: HomeServicesService) { }

  ngOnInit(): void {
    this.homeServicesService.getLastestFeed().subscribe((data: LastFeedModel) => {
      this.latestFeedData = data;
    });
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
    this.homeServicesService.getCompetitionFeed(competition).subscribe((data: any) => {
      this.compData = data
    });
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
    this.homeServicesService.getCompetitionFeed(team).subscribe((data: any) => {
      this.teamData = data
    });
  }

}
