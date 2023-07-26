import {Component, Input} from '@angular/core';
import {Agenda, AvailableHour } from "../../models/agenda/Agenda";
import {ActionDialogComponent} from "../action-dialog/action-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  constructor(private dialog: MatDialog) {
  }
  // @ts-ignore
  @Input('agenda') agenda: Agenda;

  getColumnsToDisplay(): string[] {
    return ['hours', 'players', 'status', 'actions'];
  }

  getCurrentDateFormatted(): string {
    return `${this.dayToSpanish(this.agenda.day.dayOfWeek)} ${this.agenda.day.number} de ${this.monthToSpanish(this.agenda.month)} del ${this.agenda.year}`;
  }

  performBookingAction(hour: AvailableHour) {
    const dialogRef = this.dialog.open(ActionDialogComponent, {

      width : '350px',
      data: {
        agendaDateFormatted: this.getCurrentDateFormatted(),
        agenda: this.agenda,
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

  monthToSpanish(month: string): String {
    const getTranslatedMonth = (month: string): string => {
      switch (month.toUpperCase()) {
        case 'JANUARY':
          return 'Enero';
        case 'FEBRUARY':
          return 'Febrero';
        case 'MARCH':
          return 'Marzo';
        case 'APRIL':
          return 'Abril';
        case 'MAY':
          return 'Mayo';
        case 'JUNE':
          return 'Junio';
        case 'JULY':
          return 'Julio';
        case 'AUGUST':
          return 'Agosto';
        case 'SEPTEMBER':
          return 'Septiembre';
        case 'OCTOBER':
          return 'Octubre';
        case 'NOVEMBER':
          return 'Noviembre';
        case 'DECEMBER':
          return 'Diciembre';
        default:
          return 'TBD';
      }
    };

    return getTranslatedMonth(month)
  }

  dayToSpanish(day: string): string {
    const getTranslatedDay = (day: string): string => {
      switch (day.toUpperCase()) {
        case 'SUNDAY':
          return 'Domingo';
        case 'MONDAY':
          return 'Lunes';
        case 'TUESDAY':
          return 'Martes';
        case 'WEDNESDAY':
          return 'Miércoles';
        case 'THURSDAY':
          return 'Jueves';
        case 'FRIDAY':
          return 'Viernes';
        case 'SATURDAY':
          return 'Sábado';
        default:
          return 'TBD';
      }
    };

    return getTranslatedDay(day)
  }

}
