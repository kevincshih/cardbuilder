import { Injectable } from '@angular/core';
import { ISplitter } from './ISplitter';
import { IBlanker } from './IBlanker';
import { IFormatter } from './IFormatter';


@Injectable({
  providedIn: 'root',
})
export class ConverterService {

  readonly splitter: ISplitter;
  readonly blanker: IBlanker;
  readonly formatter: IFormatter;

  constructor(s: ISplitter, b: IBlanker, f: IFormatter) {
    this.splitter = s;
    this.blanker = b;
    this.formatter = f;
  }

  convert(s: String): String{
      let sa = this.splitter.split(s);
      let sac = sa.map(s => this.blanker.blank(s));
      return this.formatter.format(sac);
  }

}
