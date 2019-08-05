import { Splitter } from './Splitter';
import { SentenceSplitter } from './SentenceSplitter';
import { NullSplitter } from './NullSplitter';
const nullSplitter = new NullSplitter();

export type Splitters = 'sentence' | null;
export class SplitterFactory {
    static getSplitterInstance(type: Splitters): Splitter {
        switch(type){
            case 'sentence':
                return new SentenceSplitter();
            default:
                return nullSplitter;
        }
    }
}