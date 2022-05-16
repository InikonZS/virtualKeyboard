import Control from "./common/control";
import {Output} from "./output";
import {Board} from "./board";
import board from "./langs/en";
import board1 from "./langs/ru";

export class Keyboard extends Control{
  private output: Output;
  private board: Board;
  private languages= [
    board,
    board1
  ];
  private langIndex = 0;

  constructor(parentNode:HTMLElement){
    super(parentNode);
    this.output = new Output(this.node);
    this.board = new Board(this.node, this.languages[this.langIndex], (char)=>{
      this.output.content += char;
    });

    this.board.onNextLanguage = ()=>{
      this.langIndex = (this.langIndex + 1) % this.languages.length;
      this.board.setLanguage(this.languages[this.langIndex]);
    }

    this.board.onBackspace = ()=>{
      this.output.content = this.output.content.slice(0, -1);
    }

    document.addEventListener('keydown', (e)=>{
      console.log(e.code);
      this.board.handleDown(e.code);
    });

    document.addEventListener('keyup', (e)=>{
      console.log(e.code);
      this.board.handleUp(e.code);
    });
  }
}



