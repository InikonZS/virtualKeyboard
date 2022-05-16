import Control from "./common/control";

export class Output extends Control{
  private _content: string = '';

  set content(value:string){
    this._content = value;
    this.node.textContent = this._content;
  }

  get content(){
    return this._content
  }

  constructor(parentNode:HTMLElement){
    super(parentNode);

  }
}