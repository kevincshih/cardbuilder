import { Blanker } from './Blanker';
import { RandomBlanker } from './RandomBlanker';
import { MaxBlanker } from './MaxBlanker';
import { NullBlanker } from './NullBlanker';
const nullBlanker = new NullBlanker();

export type Blankers = 'random' | 'max' | null;
export class BlankerFactory {
    static getBlankerInstance(type: Blankers): Blanker {
        switch(type){
            case 'random':
                return new RandomBlanker();
            case 'max':
                return new MaxBlanker();
            default:
                return nullBlanker;
        }
    }
}