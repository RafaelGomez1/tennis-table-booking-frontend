import {Component, Input} from '@angular/core';
import {Agenda, AvailableHour, RegisteredPlayer} from "../../models/agenda/Agenda";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  // @ts-ignore
  @Input('agenda') agenda: Agenda;

  getColumnsToDisplay(): string[] {
    const columns: string[] = []; // Always include the players column
    for (const hour of this.agenda.availableHours) {
      columns.push(hour.id);
    }
    return columns;
  }

  getPlayerNamesForHour(hour: AvailableHour): string[] {
    return hour.registeredPlayers.map((player: RegisteredPlayer) => player.name);
  }

}
