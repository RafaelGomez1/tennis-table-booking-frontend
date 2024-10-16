import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { TableListComponent } from './components/table-list/table-list.component';
import { LogoComponent } from './components/logo/logo.component';
import { AuthDialogComponent } from './components/auth-dialog/auth-dialog.component';
import { ActionDialogComponent } from './components/action-dialog/action-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatTableModule} from "@angular/material/table";
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatCardModule} from "@angular/material/card";
import {MatChipsModule} from "@angular/material/chips";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {MatBadgeModule} from "@angular/material/badge";
import { BookingActionDialogComponent } from './components/booking-action-dialog/booking-action-dialog.component';
import { RankingTableComponent } from "./components/ranking-table/ranking-table.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import { StandingsTableComponent } from './components/standings-table/standings-table.component';
import { StandingsTableListComponent } from './components/standings-table-list/standings-table-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableListComponent,
    LogoComponent,
    AuthDialogComponent,
    ActionDialogComponent,
    BookingActionDialogComponent,
    RankingTableComponent,
    StandingsTableComponent,
    StandingsTableListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatChipsModule,
    MatSelectModule,
    MatIconModule,
    MatBadgeModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
