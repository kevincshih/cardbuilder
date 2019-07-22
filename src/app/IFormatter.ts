import { ICard } from './ICard';

export interface IFormatter{
    format(c: ICard[]): String;
}