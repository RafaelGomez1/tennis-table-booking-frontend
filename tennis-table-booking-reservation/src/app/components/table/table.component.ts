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
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

  performAction(hour: AvailableHour) {
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

}
