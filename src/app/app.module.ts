import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SendComponent } from './send/send.component';
import { RecieveComponent } from './recieve/recieve.component';
import { SentRequestComponent } from './sent-request/sent-request.component';
import { RrecieveRequestComponent } from './rrecieve-request/rrecieve-request.component';

@NgModule({
  declarations: [
    AppComponent,
    SendComponent,
    RecieveComponent,
    SentRequestComponent,
    RrecieveRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
