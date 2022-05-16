import {Keyboard} from './keyboard';
import {KeyboardState} from './keyboardState';
import './style.css';

const state = new KeyboardState({
  content: '',
  langIndex: 0,
  shift: false,
  caps: false
});

const keyboard = new Keyboard(document.body, state);

(window as any).keyboard = keyboard;
