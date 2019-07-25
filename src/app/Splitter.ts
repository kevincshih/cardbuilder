import { ISplitter } from './ISplitter'

export abstract class Splitter implements ISplitter {
    abstract split(s: String): String[];
}