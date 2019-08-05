import { Splitter } from './Splitter';
import { SentenceSplitter } from './SentenceSplitter';
import { NullSplitter } from './NullSplitter';
import { ParagraphSplitter } from './ParagraphSplitter';
const nullSplitter = new NullSplitter();

export type Splitters = 'sentence' | 'paragraph' | null;
export class SplitterFactory {
    static getSplitterInstance(type: Splitters): Splitter {
        switch(type){
            case 'sentence':
                return new SentenceSplitter();
            case 'paragraph':
                return new ParagraphSplitter();
            default:
                return nullSplitter;
        }
    }
}