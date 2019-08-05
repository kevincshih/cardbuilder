import { Formatter } from './Formatter';
import { CSVFormatter } from './CSVFormatter';
import { NullFormatter } from './NullFormatter';
const nullFormatter = new NullFormatter();

export type Formatters = 'csv' | null;
export class FormatterFactory {
    static getFormatterInstance(type: Formatters): Formatter {
        switch(type){
            case 'csv':
                return new CSVFormatter();
            default:
                return nullFormatter;
        }
    }
}