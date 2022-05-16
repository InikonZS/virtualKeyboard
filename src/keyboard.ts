import Control from "./common/control";
import {Output} from "./output";
import {Board} from "./board";
import board from "./langs/en";

export class Keyboard extends Control{
  private output: Output;
  private board: Board;

  constructor(parentNode:HTMLElement){
    super(parentNode);
    this.output = new Output(this.node);
    this.board = new Board(this.node, board, (char)=>{
      this.output.content += char;
    });

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



