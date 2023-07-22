import {Component, Input} from '@angular/core';
import {Agenda} from "../../models/agenda/Agenda";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  // @ts-ignore
  @Input('agenda') agenda: Agenda;

  columnsToDisplay: string[] = ['hour', 'players'];
}
