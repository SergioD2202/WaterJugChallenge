import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { WaterjugsolutionService } from './services/waterjugsolution.service';
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
    MatTableModule,
    BrowserModule,
    FormsModule,
  ],
  providers: [WaterjugsolutionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
