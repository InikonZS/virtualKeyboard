import Control from "./common/control";
import {Output} from "./output";
import {Board} from "./board";
//import board from "./langs/en";
//import board1 from "./langs/ru";
import {IKeyboardData, KeyboardState} from './keyboardState';
import layout from './langs/layout';

export class Keyboard extends Control{
  private output: Output;
  private board: Board;
 /* private languages= [
    board,
    board1
  ];*/
  private langIndex = 0;

  constructor(parentNode:HTMLElement, state: KeyboardState){
    super(parentNode);
    
    const update = (data: IKeyboardData)=>{
      this.output.content = data.content;
      const currentBoard = state.languages[data.langIndex];
      if (data.shift){
        this.board.setLanguage(currentBoard.shift);
      } else if (data.caps){
        this.board.setLanguage(currentBoard.caps);
      } else {
        this.board.setLanguage(currentBoard.base);
      }
    }
    state.onChange.add(update)
    this.output = new Output(this.node);
    this.board = new Board(this.node, layout, state);


    /*this.board.onNextLanguage = ()=>{
      this.langIndex = (this.langIndex + 1) % this.languages.length;
      this.board.setLanguage(this.languages[this.langIndex]);
    }

    this.board.onBackspace = ()=>{
      this.output.content = this.output.content.slice(0, -1);
    }*/

    document.addEventListener('keydown', (e)=>{
      console.log(e.code);
      this.board.handleDown(e.code);
    });

    document.addEventListener('keyup', (e)=>{
      console.log(e.code);
      this.board.handleUp(e.code);
    });

    update(state.data);
  }
}



