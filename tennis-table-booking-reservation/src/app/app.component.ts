import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthDialogComponent } from "./components/auth-dialog/auth-dialog.component";
import { Agenda } from "./models/agenda/Agenda";
import { AgendaService } from "./services/agenda.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private dialog: MatDialog, private agendaService: AgendaService) {}

  title = 'TT Sant Andreu Reservas';
  agendas: Agenda[] = []

  // @ts-ignore
  private subscription: Subscription;

  openAuthDialog(): void {
    this.dialog.open(AuthDialogComponent, {
      width: '350px',
    });
  }

  ngOnInit() {
    // TODO -> Get current week and year


    this.subscription = this.agendaService.getWeekAgenda(28, 2023).subscribe( res => {
      res.forEach( value => console.log(value))
      this.agendas = res
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
