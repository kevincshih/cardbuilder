import { Blanker } from './Blanker';
import { RandomBlanker } from './RandomBlanker';
import { NullBlanker } from './NullBlanker';
const nullBlanker = new NullBlanker();

export type Blankers = 'random' | null;
export class BlankerFactory {
    static getBlankerInstance(type: Blankers): Blanker {
        switch(type){
            case 'random':
                return new RandomBlanker();
            default:
                return nullBlanker;
        }
    }
}