import {Component, Input} from '@angular/core';
import {League, RankingData} from "../../models/ranking/LeagueRanking";

@Component({
  selector: 'app-ranking-table',
  templateUrl: './ranking-table.component.html',
  styleUrls: ['./ranking-table.component.css']
})
export class RankingTableComponent {
  constructor() {
  }

  // @ts-ignore
  @Input('rankingData') ranking: RankingData

  ligas = Object.values(League)
  selectedLeague = League.TERCERA_A
  selectedClub = "TT Sant Andreu"

  getColumnsToDisplay(): string[] {
    // return ['id', 'name', 'gamesPlayed', 'gamesWon', 'gamesLost', 'winRate', 'rankingPoints'];
    // return ['id', 'name', 'games', 'winRate', 'rankingPoints'];
    return ['id', 'name', 'gamesPlayed', 'winRate', 'rankingPoints'];
  };

  onSearchClick() {

  }


}
