import { Injectable, Inject } from '@angular/core';
import { Blanker } from './Blanker';
import { ICard } from './ICard';

@Injectable()
export class RandomBlanker extends Blanker {
    blank(s: String): ICard {
        let r = Math.random();
        let words = s.split(' ');
        let i = Math.floor(r*words.length);
        let a = words[i];
        words[i] = '_'.repeat(a.length);
        let q = words.join(' ');
        return {question: q, answer: a};
    }
}