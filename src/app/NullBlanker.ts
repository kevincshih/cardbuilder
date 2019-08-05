import { Injectable, Inject } from '@angular/core';
import { Blanker } from './Blanker';
import { Card } from './Card';

@Injectable()
export class NullBlanker implements Blanker {
    blank(s: String): Card {
        return {question: s, answer: ''};
    }
}