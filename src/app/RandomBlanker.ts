import { Injectable, Inject } from '@angular/core';
import { Blanker } from './Blanker';
import { Card } from './Card';

@Injectable()
export class RandomBlanker implements Blanker {
    blank(s: String): Card {
        let r = Math.random();
        let words = s.split(' ');
        let i = Math.floor(r*words.length);
        let a = words[i];
        words[i] = '_'.repeat(a.length);
        let q = words.join(' ');
        return {question: q, answer: a};
    }
}