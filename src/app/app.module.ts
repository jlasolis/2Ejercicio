import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogingComponent } from './loging/loging.component';
import { PieDePaginaComponent } from './pie-de-pagina/pie-de-pagina.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { MensajesComponent } from './mensajes/mensajes.component';

import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { UsuariosDetalleComponent } from './usuarios-detalle/usuarios-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    LogingComponent,
    PieDePaginaComponent,
    UsuarioComponent,
    BuscadorComponent,
    MensajesComponent,
    UsuariosDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    //esto lo tenemos que quitar cuando llamemos al servidor real
    //porque se pone en medio de la llamada y el servidor
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
