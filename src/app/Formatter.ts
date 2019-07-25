import { ICard } from './ICard';
import { IFormatter } from './IFormatter'

export abstract class Formatter implements IFormatter {
    abstract format(c: ICard[]): String;
}