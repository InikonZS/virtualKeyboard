import {Keyboard} from './keyboard';

const keyboard = new Keyboard(document.body);

(window as any).keyboard = keyboard;
