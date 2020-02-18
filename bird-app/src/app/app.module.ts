import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BirdsComponent } from './birds/birds.component';
import { BirdComponent } from './bird/bird.component';

@NgModule({
  declarations: [
    AppComponent,
    BirdsComponent,
    BirdComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
