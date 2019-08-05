import { Injectable, Inject } from '@angular/core';
import { Splitter } from './Splitter';

@Injectable()
export class ParagraphSplitter implements Splitter {
    split(s: String): String[] {
        return s.split(/[\r\n]+/);
    }
}