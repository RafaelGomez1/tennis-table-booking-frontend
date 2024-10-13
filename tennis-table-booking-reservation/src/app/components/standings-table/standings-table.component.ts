import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {RankingService} from "../../services/ranking.service";
import {LeagueStandingsDTO} from "../../models/ranking/LeagueRanking";

@Component({
  selector: 'app-standings-table',
  templateUrl: './standings-table.component.html',
  styleUrls: ['./standings-table.component.css']
})
export class StandingsTableComponent implements OnInit, OnDestroy {
  constructor(private rankingService: RankingService,) {}

  // @ts-ignore
  @Input('standingsData') standings: LeagueStandingsDTO[];

  // @ts-ignore
  private subscription: Subscription;

  getColumnsToDisplay(): string[] {
    return ['id', 'name', 'gamesPlayed', 'gamesWon', 'gamesLost', 'pointsWon', 'pointsLost', 'rankingPoints'];
  };

  ngOnInit() {
    console.log("Standings value is " + this.standings)
  }

  ngOnDestroy() {

  }
}
