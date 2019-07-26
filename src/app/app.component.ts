import { Component } from '@angular/core';
import { ConverterService } from './converter.service';

@Component({
  selector: 'app-root',
  template: `
  <textarea [(ngModel)]="text">Enter text here...</textarea>
  <button (click)="submit()">Submit</button>
  <textarea [(ngModel)]="result" [readonly]="true"></textarea>
  `
})
export class AppComponent {
  public text: String = '';
  public result: String = '';
  constructor(private converterService: ConverterService) {

  }

  submit(): void {
    this.result = this.converterService.convert(this.text);
  }
}
