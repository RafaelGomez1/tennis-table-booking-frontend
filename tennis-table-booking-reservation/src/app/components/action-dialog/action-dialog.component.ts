import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Agenda, AvailableHour} from "../../models/agenda/Agenda";
import {AgendaService} from "../../services/agenda.service";
import {Action} from "../../models/action/Action";

@Component({
  selector: 'app-action-dialog',
  templateUrl: './action-dialog.component.html',
  styleUrls: ['./action-dialog.component.css']
})
export class ActionDialogComponent {
  agendaDateFormatted: string;
  reservationType: string = '';
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
    this.reservationType = this.decideDefaultReservationValue()
    this.agendaDateFormatted = data.agendaDateFormatted;
  }

  onSubmit(): void {
    if(this.reservationType == 'Reservar') {
      this.agendaService.bookSlot(this.agenda.id, this.selectedHour.id, this.name)
        .subscribe(agenda => this.dialogRef.close(agenda))
    } else if (this.reservationType == 'Cancelar Reserva') {
      this.agendaService.cancelBooking(this.agenda.id, this.selectedHour.id, this.name)
        .subscribe(agenda => this.dialogRef.close(agenda))
    } else { this.dialogRef.close(this.agenda) }
  }

  onCancel() {
    this.dialogRef.close();
  }

  protected readonly parseInt = parseInt;

  reservationTypeOptions(): string[] {
    if (this.selectedHour.registeredPlayers.length === parseInt(this.selectedHour.capacity.value, 10)) {
      return ['Cancelar Reserva']
    } else if (this.selectedHour.registeredPlayers.length === 0) {
      return ['Reservar']
    } else return ['Reservar', 'Cancelar Reserva']
  }

  decideDefaultReservationValue() {
    if (this.selectedHour.registeredPlayers.length === parseInt(this.selectedHour.capacity.value, 10)) {
      return 'Cancelar Reserva'
    } else return 'Reservar'
  }
}
