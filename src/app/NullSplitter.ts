import { Injectable, Inject } from '@angular/core';
import { Splitter } from './Splitter';

@Injectable()
export class NullSplitter implements Splitter {
    split(s: String): String[] {
        return [s];
    }
}