import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CSVFormatter } from './CSVFormatter';
import { RandomBlanker } from './RandomBlanker';
import { SentenceSplitter } from './SentenceSplitter';
import { ConverterService } from './converter.service';
import { BlankerFactory } from './BlankerFactory';
import { FormatterFactory } from './FormatterFactory';
import { SplitterFactory } from './SplitterFactory';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [BlankerFactory, FormatterFactory, SplitterFactory, ConverterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
