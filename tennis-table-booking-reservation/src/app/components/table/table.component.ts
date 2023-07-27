import {Component, Input} from '@angular/core';
import {Agenda, AvailableHour } from "../../models/agenda/Agenda";
import {ActionDialogComponent} from "../action-dialog/action-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {TranslationService} from "../../services/translation.service";
import {BookingActionDialogComponent} from "../booking-action-dialog/booking-action-dialog.component";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  constructor(private dialog: MatDialog, private translationService: TranslationService) {
  }
  // @ts-ignore
  @Input('agenda') agenda: Agenda;

  getColumnsToDisplay(): string[] {
    return ['hours', 'players', 'status', 'actions'];
  }

  getCurrentDateFormatted(): string {
    return `${this.translationService.dayToSpanish(this.agenda.day.dayOfWeek)} ${this.agenda.day.number} de ${this.translationService.monthToSpanish(this.agenda.month)} del ${this.agenda.year}`;
  }

  performBookingAction(hour: AvailableHour) {
    const dialogRef = this.dialog.open(BookingActionDialogComponent, {

      width : '350px',
      data: {
        agendaDateFormatted: this.getCurrentDateFormatted(),
        agenda: this.agenda,
        type: 'Reservar',
        selectedHour: hour,
      },
    });

    dialogRef.afterClosed().subscribe((agenda) => {
      if (agenda) {
        this.agenda = agenda
      }
    });
  }

  performCancelBookingAction(hour: AvailableHour) {
    const dialogRef = this.dialog.open(ActionDialogComponent, {

      width : '350px',
      data: {
        agendaDateFormatted: this.getCurrentDateFormatted(),
        agenda: this.agenda,
        type: 'Cancelar Reserva',
        selectedHour: hour,
      },
    });

    dialogRef.afterClosed().subscribe((agenda) => {
      if (agenda) {
        this.agenda = agenda
      }
    });
  }

  // Method to check if the hour is available (fewer players than capacity)
  isAvailable(hour: AvailableHour): boolean {
    return hour.registeredPlayers.length < +hour.capacity.value;
  }

  shouldShowDelete(hour: AvailableHour): boolean {
    return hour.registeredPlayers.length >= 1;
  }
}
