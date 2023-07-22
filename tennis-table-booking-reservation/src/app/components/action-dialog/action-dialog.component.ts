import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Agenda, AvailableHour} from "../../models/agenda/Agenda";

@Component({
  selector: 'app-action-dialog',
  templateUrl: './action-dialog.component.html',
  styleUrls: ['./action-dialog.component.css']
})
export class ActionDialogComponent {
  agendaDateFormatted: string;
  reservationType: string = 'reservar';
  selectedHour: AvailableHour;
  name: string= '';
  agenda: Agenda


  constructor(
    private dialogRef: MatDialogRef<ActionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {
    this.agenda = data;
    this.selectedHour =
    this.agendaDateFormatted = data.agendaDateFormatted
  }


  onSubmit(): void {
    // Perform the action based on the selected data (reservationType, selectedHour, name)
    const reservationData = {
      reservationType: this.reservationType,
      selectedHour: this.selectedHour,
      name: this.name,
    };
    this.dialogRef.close(reservationData);
  }

  onCancel() {
    this.dialogRef.close();
  }
}
