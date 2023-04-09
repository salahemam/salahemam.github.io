import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListFirstPart, ListLastPart } from './pipes/split-list.pipe';
import { CVComponent } from './components/my-cv/cv.component';

let components: any[] = [
  AppComponent,
  CVComponent
]

let pipes: any[] = [
  ListLastPart,
  ListFirstPart
]
@NgModule({
  declarations: [
    components,
    pipes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
