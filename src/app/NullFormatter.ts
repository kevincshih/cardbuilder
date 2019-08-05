import { Card } from './Card';
import { Formatter } from './Formatter'

export class NullFormatter implements Formatter {
    format(c: Card[]): String {
        return JSON.stringify(c);
    }
}