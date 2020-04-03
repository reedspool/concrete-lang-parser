import test from 'ava';
import { parseByte, parseFile } from '../index';
import { Machine } from 'xstate';

test('parseFile("")', t => {
  t.is(parseFile(""),
    {
      type: "root",
      tape: []
    });
});


interface ParserStateSchema {
  states: {
    empty:
    {

    }
  }
}


// The events that the machine handles
type ParserEvent =
  | { type: 'FILE' }
  | { type: 'BYTE' }

// The context (extended state) of the machine
interface ParserContext {

}

const parserMachine = Machine<ParserContext, ParserStateSchema, ParserEvent>({
  initial: 'empty',
  context: {},
  states: {
    empty: {
      on:
      {
        FILE: "",
        BYTE: ""
      }
    }
  }
});