import { ICard } from './ICard';
import { IBlanker } from './IBlanker'

export abstract class Blanker implements IBlanker {
    abstract blank(s: String): ICard;
}