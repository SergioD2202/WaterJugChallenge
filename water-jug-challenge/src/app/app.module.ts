import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParagraphCardComponent } from './components/paragraph-card/paragraph-card.component';
import { ResultsTableComponent } from './components/results-table/results-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ParagraphCardComponent,
    ResultsTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
