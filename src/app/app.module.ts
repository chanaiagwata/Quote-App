import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuotesComponent } from './quotes/quotes.component';
import { HighlightQuoteDirective } from './highlight-quote.directive';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { QuoteDescriptionComponent } from './quote-description/quote-description.component';
import { TimeCountPipe } from './time-count.pipe';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuotesComponent,
    HighlightQuoteDirective,
    QuoteFormComponent,
    QuoteDescriptionComponent,
    TimeCountPipe,
 
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
