import { Card } from './Card';
import { Formatter } from './Formatter'

export class JSONFormatter implements Formatter {
    format(c: Card[]): String {
        return JSON.stringify(c);
    }
}