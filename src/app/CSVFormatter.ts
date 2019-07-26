import { ICard } from './ICard';
import { Formatter } from './Formatter'
import * as Papa from 'papaparse';

export class CSVFormatter extends Formatter {
    format(c: ICard[]): String {
        return Papa.unparse(c);
    }
}