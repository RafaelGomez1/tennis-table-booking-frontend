import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Clubs, League, RankingData} from "../../models/ranking/LeagueRanking";
import {RankingService} from "../../services/ranking.service";
import {ClubsService} from "../../services/clubs.service";

@Component({
  selector: 'app-ranking-table',
  templateUrl: './ranking-table.component.html',
  styleUrls: ['./ranking-table.component.css']
})
export class RankingTableComponent implements OnInit, OnDestroy {
  constructor(
    private rankingService: RankingService,
    private clubService: ClubsService
  ) {}

  // @ts-ignore
  @Input('rankingData') ranking: RankingData

  ligas = Object.values(League)
  selectedLeague = League.TERCERA_A
  selectedClub = ""

  // @ts-ignore
  private subscription: Subscription;
  // @ts-ignore
  private subscription2: Subscription;
  // @ts-ignore
  leagueRanking: RankingData;
  // @ts-ignore
  clubs: Clubs

  getColumnsToDisplay(): string[] {
    return ['id', 'name', 'gamesPlayed', 'winRate', 'rankingPoints'];
  };

  onSearchClick() {



    this.subscription2 = this.rankingService.getRanking(this.selectedLeague, this.selectedClub).subscribe(res => {
      console.log(res)
      this.ranking.players = res.players
    })
  }

  ngOnInit() {
    this.subscription2 = this.rankingService.getRanking(this.selectedLeague, this.selectedClub).subscribe(res => {
      console.log(res)
      this.ranking.players = res.players
    })

    this.subscription = this.clubService.getClubs(this.selectedLeague).subscribe(res => {
      console.log(res)
      this.clubs = res
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
    this.subscription2.unsubscribe()
  }

  onLeagueSelectionChange() {
    this.subscription = this.clubService.getClubs(this.selectedLeague).subscribe(res => {
      console.log(res)
      this.clubs = res
    })
  }
}
