import Control from "./common/control";
import { Key } from "./keys/key";
import { KeyLang } from "./keys/keyLang";
import { KeyBackspace } from "./keys/keyBackspace";
import {KeyboardState} from './keyboardState';


export class Board extends Control{
  private keyMap: Record<string, Key> = {};
  onNextLanguage: ()=>void;
  onBackspace: ()=>void;

  constructor(parentNode:HTMLElement, boardConfig: Record<string, string>, state: KeyboardState){
    super(parentNode);
    for (let keyCode in boardConfig){
      let key: Key = null;
      switch (keyCode){
        case "Lang":
          key = new KeyLang(this.node, boardConfig[keyCode], state);
        break;
        case "Backspace":
          key = new KeyBackspace(this.node, boardConfig[keyCode], state);
        break;
        default:
          key = new Key(this.node, boardConfig[keyCode], state);
      }
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