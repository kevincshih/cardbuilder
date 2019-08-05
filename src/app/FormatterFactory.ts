import { Formatter } from './Formatter';
import { CSVFormatter } from './CSVFormatter';
import { JSONFormatter } from './JSONFormatter';
import { NullFormatter } from './NullFormatter';
const nullFormatter = new NullFormatter();

export type Formatters = 'csv' | 'json' | null;
export class FormatterFactory {
    static getFormatterInstance(type: Formatters): Formatter {
        switch(type){
            case 'csv':
                return new CSVFormatter();
            case 'json':
                return new JSONFormatter();
            default:
                return nullFormatter;
        }
    }
}