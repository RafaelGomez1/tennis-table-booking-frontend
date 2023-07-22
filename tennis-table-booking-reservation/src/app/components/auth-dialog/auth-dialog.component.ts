import { Component } from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {MatDialogRef} from "@angular/material/dialog";
import {UserLogin} from "../../models/login/UserLogin";
import {GlobalAuthService} from "../../services/global.auth.service";

@Component({
  selector: 'app-auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.css']
})
export class AuthDialogComponent {
  constructor(
    private dialogRef: MatDialogRef<AuthDialogComponent>,
    private authService: AuthenticationService,
    private globalAuthService: GlobalAuthService
  ) {}

  username = ''
  password = ''

  onConfirm() {
    // Basic Authorization credentials
    const credentials = btoa(`${this.username}:${this.password}`);
    const login = new UserLogin(this.username, this.password)

    this.authService.signIn(login, credentials).subscribe(
      response => {
        this.globalAuthService.storeAccessKey(response.accessKey)
        this.dialogRef.close()
    })
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
