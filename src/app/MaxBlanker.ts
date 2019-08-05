import { Injectable, Inject } from '@angular/core';
import { Blanker } from './Blanker';
import { Card } from './Card';

@Injectable()
export class MaxBlanker implements Blanker {
    blank(s: String): Card {        
        let words = s.split(' ');
        let i = words.reduce((r,v,i,a) => (v.length > a[r].length) ? i: r, 0);
        let a = words[i];
        words[i] = '_'.repeat(a.length);
        let q = words.join(' ');
        return {question: q, answer: a};
    }
}