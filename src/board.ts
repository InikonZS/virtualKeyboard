import Control from "./common/control";
import { Key } from "./keys/key";

export class Board extends Control{
  private keyMap: Record<string, Key> = {};

  constructor(parentNode:HTMLElement, boardConfig: Record<string, string>, onInput:(char:string)=>void){
    super(parentNode);
    for (let keyCode in boardConfig){
      const key = new Key(this.node, boardConfig[keyCode], (char)=>{
        onInput(char);
      });
      this.keyMap[keyCode] = key;
    }
  }

  setLanguage(boardConfig: Record<string, string>){
    for (let keyCode in boardConfig){
      this.keyMap[keyCode].setData(boardConfig[keyCode]);
    }
  }

  handleDown(keyCode:string){
    const currentKey = this.keyMap[keyCode];
    if (currentKey){
      currentKey.handleDown();
    }
  }

  handleUp(keyCode:string){
    const currentKey = this.keyMap[keyCode];
    if (currentKey){
      currentKey.handleUp();
    }
  }
}