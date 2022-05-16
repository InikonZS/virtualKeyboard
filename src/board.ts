import Control from "./common/control";
import { Key } from "./keys/key";
import { KeyLang } from "./keys/keyLang";
import { KeyBackspace } from "./keys/keyBackspace";
import { KeyCapsLock } from "./keys/keyCapsLock";
import { KeyShift } from "./keys/keyShift";
import {KeyboardState} from './keyboardState';

const classMap: Record<string, typeof Key> = {
  'Backspace': KeyBackspace,
  'ShiftLeft': KeyShift,
  'ShiftRight': KeyShift,
  'CapsLock': KeyCapsLock,
  'Lang': KeyLang
}
export class Board extends Control{
  private keyMap: Record<string, Key> = {};
  //onNextLanguage: ()=>void;
  //onBackspace: ()=>void;

  constructor(parentNode:HTMLElement, layoutConfig: Array<Array<string>>, state: KeyboardState){
    super(parentNode);
    //for (let keyCode in boardConfig){
      /*let key: Key = null;
      switch (keyCode){
        case "Lang":
          key = new KeyLang(this.node, boardConfig[keyCode], state);
        break;
        case "Backspace":
          key = new KeyBackspace(this.node, boardConfig[keyCode], state);
        break;
        default:
          key = new Key(this.node, boardConfig[keyCode], state);
      }*/
      layoutConfig.forEach(row=>{
        const rowView = new Control(this.node, 'div', 'keyboard_row');
        row.forEach(keyCode=>{
          const KeyConstructor = classMap[keyCode] || Key;
          const key = new KeyConstructor(rowView.node, /*boardConfig[keyCode]*/keyCode, state);
          this.keyMap[keyCode] = key;
        })
      })
      
    //}
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