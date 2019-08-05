import { Component } from '@angular/core';
import { ConverterService } from './converter.service';
import { Blankers } from './BlankerFactory';
import { Formatters } from './FormatterFactory';
import { Splitters } from './SplitterFactory';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public text: String = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  public result: String = '';
  public blankers: Blankers[] = ['random', 'max'];
  public formatters: Formatters[] = ['csv', 'json'];
  public splitters: Splitters[] = ['sentence', 'paragraph'];
  public blanker: Blankers;
  public formatter: Formatters;
  public splitter: Splitters;

  constructor(private converterService: ConverterService) {

  }

  submit(): void {
    this.result = this.converterService.convert(this.text, this.splitter, this.blanker, this.formatter);
  }
}
