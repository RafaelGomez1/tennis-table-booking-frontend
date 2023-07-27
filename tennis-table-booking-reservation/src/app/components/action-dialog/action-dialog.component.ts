import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Agenda, AvailableHour} from "../../models/agenda/Agenda";
import {AgendaService} from "../../services/agenda.service";

@Component({
  selector: 'app-action-dialog',
  templateUrl: './action-dialog.component.html',
  styleUrls: ['./action-dialog.component.css']
})
export class ActionDialogComponent {
  agendaDateFormatted: string;
  reservationType: string = 'Cancelar Reserva';
  selectedHour: AvailableHour;
  name: string= '';
  agenda: Agenda;

  constructor(
    private dialogRef: MatDialogRef<ActionDialogComponent>,
    private agendaService: AgendaService,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {
    this.agenda = data.agenda;
    this.selectedHour = data.selectedHour;
    this.agendaDateFormatted = data.agendaDateFormatted;
  }

  onSubmit(): void {
    this.agendaService.cancelBooking(this.agenda.id, this.selectedHour.id, this.name)
      .subscribe(agenda => this.dialogRef.close(agenda))
  }

  onCancel() {
    this.dialogRef.close();
  }

  reservationTypeOptions(): string[] {
      return ['Cancelar Reserva']
  }
}
