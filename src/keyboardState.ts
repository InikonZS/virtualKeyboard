import Signal from "./common/signal";
import board from "./langs/en";
import board1 from "./langs/ru";

interface IKeyboardData {
  content: string;
  langIndex: number;
}

export class KeyboardState {
  public languages= [
    board,
    board1
  ];

  private _data: IKeyboardData;
  get data(){
    return this._data;
  }

  set data(value:IKeyboardData){
    this._data = value;
    this.onChange.emit(this._data);
  }

  constructor (initial: IKeyboardData){
    this._data = initial;
  }

  public onChange = new Signal<IKeyboardData>();
}