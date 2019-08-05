import { Card } from './Card';

export interface Blanker{
    blank(s: String): Card;
}