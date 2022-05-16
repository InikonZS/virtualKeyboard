import {Keyboard} from './keyboard';
import {KeyboardState, IKeyboardData} from './keyboardState';
import './style.css';

const defaultData: IKeyboardData = {
  content: '',
  langIndex: 0,
  shift: false,
  caps: false
}

class KeyboardData implements IKeyboardData{
  content: string;
  langIndex: number;
  shift: boolean;
  caps: boolean;

  constructor(data:IKeyboardData){
    console.log(data);
    if (typeof data.content != 'string') throw new Error('');
    if (typeof data.langIndex != 'number') throw new Error('');
    if (typeof data.shift != 'boolean') throw new Error('');
    if (typeof data.caps != 'boolean') throw new Error('');
    this.content = data.content;
    this.langIndex = data.langIndex;
    this.shift = data.shift;
    this.caps = data.caps;
  }

  static load(){
    const loaded = localStorage.getItem('savedState');
    return new KeyboardData(JSON.parse(loaded));
  }

  save(){
    localStorage.setItem('savedState', JSON.stringify(this));
  }
}

let data: KeyboardData;
try {
  data = KeyboardData.load();
} catch(e){
  data = new KeyboardData(defaultData);
}

const state = new KeyboardState(data);

const keyboard = new Keyboard(document.body, state);

(window as any).keyboard = keyboard;

window.onbeforeunload = ()=>{
  new KeyboardData(state.data).save();
}
