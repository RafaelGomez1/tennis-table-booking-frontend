import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { ListViewComponent } from './list-view/list-view.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    ListViewComponent,
    IniciarSesionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
