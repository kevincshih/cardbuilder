import { Card } from './Card';

export interface Formatter{
    format(c: Card[]): String;
}