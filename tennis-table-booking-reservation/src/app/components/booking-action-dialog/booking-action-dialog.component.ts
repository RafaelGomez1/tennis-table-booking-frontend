import {Component, Inject} from '@angular/core';
import {Agenda, AvailableHour} from "../../models/agenda/Agenda";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AgendaService} from "../../services/agenda.service";
import {ActionDialogComponent} from "../action-dialog/action-dialog.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {catchError, of} from "rxjs";

@Component({
  selector: 'app-booking-action-dialog',
  templateUrl: './booking-action-dialog.component.html',
  styleUrls: ['./booking-action-dialog.component.css']
})
export class BookingActionDialogComponent {
  agendaDateFormatted: string;
  reservationType: string = 'Reservar';
  selectedHour: AvailableHour;
  name: string= '';
  agenda: Agenda;

  constructor(
    private dialogRef: MatDialogRef<ActionDialogComponent>,
    private agendaService: AgendaService,
    @Inject(MAT_DIALOG_DATA) private data: any,
  ) {
    this.agenda = data.agenda;
    this.selectedHour = data.selectedHour;
    this.agendaDateFormatted = data.agendaDateFormatted;
  }

  onSubmit(): void {
      this.agendaService.bookSlot(this.agenda.id, this.selectedHour.id, this.name)
        .subscribe(agenda => this.dialogRef.close(agenda))
  }

  onCancel() { this.dialogRef.close(); }

  reservationTypeOptions(): string[] {
      return ['Reservar'];
  }
}
