import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnglishComponent } from './english/english.component';
import { PortuguesComponent } from './portugues/portugues.component';

@NgModule({
  declarations: [
    AppComponent,
    EnglishComponent,
    PortuguesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PerfectScrollbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
