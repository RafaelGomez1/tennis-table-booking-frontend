import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AuthDialogComponent} from "./components/auth-dialog/auth-dialog.component";
import {Agenda} from "./models/agenda/Agenda";
import {AgendaService} from "./services/agenda.service";
import {Subscription} from "rxjs";
import {RankingService} from "./services/ranking.service";
import {League, LeagueStandingsDTO, RankingData} from "./models/ranking/LeagueRanking";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(
    private dialog: MatDialog,
    private agendaService: AgendaService,
    private rankingService: RankingService
  ) {}

  title = 'TT Sant Andreu Reservas';
  agendas: Agenda[] = []
  showTableList = true;
  showEventButton = false;

  // @ts-ignore
  private subscription: Subscription;
  // @ts-ignore
  private subscription2: Subscription;
  // @ts-ignore
  leagueRanking: RankingData;
  standingsData: LeagueStandingsDTO[] = [];

  openAuthDialog(): void {
    this.dialog.open(AuthDialogComponent, {
      width: '350px',
    });
  }

  openRankingTable(): void {
    // this.dialog.open(RankingTableComponent, {
    //   width: '350px',
    // });
  }

  toggleTableList() {
    this.showTableList = !this.showTableList;
    this.showEventButton = !this.showEventButton;
  }

  ngOnInit() {
    const x = this.getCurrentWeekAndYear()
    console.log(`This is week ${x.week} of year ${x.year}`)

    this.subscription = this.agendaService.getWeekAgenda(x.week, x.year).subscribe( res => {
      let agendas = res.filter((agenda) => agenda.availableHours && agenda.availableHours.length > 0);
      agendas.forEach( value => console.log(value))
      this.agendas = agendas
    })

    this.subscription2 = this.rankingService.getRanking(League.TERCERA_A, "TT SANT ANDREU -A-").subscribe(res => {
      console.log(res)
      this.leagueRanking = res

      if (res.standings.has("G1")) {
        const tmp = res.standings.get("G1")!
        console.log("TMP value is " + tmp)
        this.standingsData = tmp
      }
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  private getCurrentWeekAndYear(): { week: number; year: number } {
    const now = new Date();
    const onejan = new Date(now.getFullYear(), 0, 1);

    // Calculate the week number
    const weekNumber = Math.ceil(((now.getTime() - onejan.getTime()) / 86400000 + onejan.getDay() + 1) / 7);

    // Get the current year
    const year = now.getFullYear();

    return { week: weekNumber, year: year };
  }

  getStandings() {
    const standings = this.leagueRanking.standings.get("G1")

    if (standings) {
      return standings
    } else return []
  }
}
