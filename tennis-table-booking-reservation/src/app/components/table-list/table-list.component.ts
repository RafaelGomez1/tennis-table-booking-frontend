import {Component, Input} from '@angular/core';
import {Agenda} from "../../models/agenda/Agenda";

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent {
  @Input() agendas: Agenda[] = []; //
}
