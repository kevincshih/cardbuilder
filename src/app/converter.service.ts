import { Injectable } from '@angular/core';
import { SplitterFactory, Splitters } from './SplitterFactory';
import { BlankerFactory, Blankers } from './BlankerFactory';
import { FormatterFactory, Formatters } from './FormatterFactory';


@Injectable({
  providedIn: 'root',
})
export class ConverterService {

  readonly splitterFactory: SplitterFactory;
  readonly blankerFactory: BlankerFactory;
  readonly formatterFactory: FormatterFactory;

  constructor(s: SplitterFactory, b: BlankerFactory, f: FormatterFactory) {
    this.splitterFactory = s;
    this.blankerFactory = b;
    this.formatterFactory = f;
  }

  convert(s: String, sp: Splitters = null, b: Blankers = null, f: Formatters = null): String{
      const splitter = SplitterFactory.getSplitterInstance(sp);
      const blanker = BlankerFactory.getBlankerInstance(b);
      const formatter = FormatterFactory.getFormatterInstance(f);
      let sa = splitter.split(s);
      let sac = sa.map(s => blanker.blank(s));
      return formatter.format(sac);
  }

}