import { Card } from './Card';
import { Formatter } from './Formatter'
import * as Papa from 'papaparse';

export class CSVFormatter implements Formatter {
    format(c: Card[]): String {
        return Papa.unparse(c);
    }
}