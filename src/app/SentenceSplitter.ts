import { Injectable, Inject } from '@angular/core';
import { Splitter } from './Splitter';

@Injectable()
export class SentenceSplitter implements Splitter {
    split(s: String): String[] {
        return s.split(/[.!\?]+/);
    }
}