import { Component } from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {MatDialogRef} from "@angular/material/dialog";
import {UserLogin} from "../../models/login/UserLogin";
import {AgendaService} from "../../services/agenda.service";

@Component({
  selector: 'app-auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.css']
})
export class AuthDialogComponent {
  constructor(
    private dialogRef: MatDialogRef<AuthDialogComponent>,
    private authService: AuthenticationService,
    private agendaService: AgendaService
  ) {}

  username = ''
  password = ''

  onConfirm() {
    // Basic Authorization credentials
    const credentials = btoa(`${this.username}:${this.password}`);

    const login = new UserLogin(this.username, this.password)
    this.authService.signIn(login, credentials).subscribe(
      response => {
        console.log(response.accessKey);
        this.dialogRef.close()
    })


    this.agendaService.getWeekAgenda(28, 2023).subscribe( response => {
      console.log(response);
      this.dialogRef.close();
    })
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
