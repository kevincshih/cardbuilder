import { Component } from '@angular/core';
import { ConverterService } from './converter.service';
import { Blankers } from './BlankerFactory';
import { Formatters } from './FormatterFactory';
import { Splitters } from './SplitterFactory';


@Component({
  selector: 'app-root',
  template: `
  <textarea [(ngModel)]="text">Enter text here...</textarea>
  <br />
  <select [(ngModel)]="splitter">
  <option *ngFor="let s of splitters">{{s}}</option>
  </select>
  <br />
  <select [(ngModel)]="blanker">
  <option *ngFor="let b of blankers">{{b}}</option>
  </select>
  <br />
  <select [(ngModel)]="formatter">
  <option *ngFor="let f of formatters">{{f}}</option>
  </select>
  <br />
  <button (click)="submit()">Submit</button>
  <br />
  <textarea [(ngModel)]="result" [readonly]="true"></textarea>
  `
})
export class AppComponent {
  public text: String = '';
  public result: String = '';
  public blankers: Blankers[] = ['random'];
  public formatters: Formatters[] = ['csv'];
  public splitters: Splitters[] = ['sentence'];
  public blanker: Blankers;
  public formatter: Formatters;
  public splitter: Splitters;

  constructor(private converterService: ConverterService) {

  }

  submit(): void {
    this.result = this.converterService.convert(this.text, this.splitter, this.blanker, this.formatter);
  }
}
