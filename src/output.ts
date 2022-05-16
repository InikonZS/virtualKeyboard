import Control from "./common/control";

/*class CodeLine extends Control{

}*/

export class Output extends Control{
  //private _content: string = '';
  private words: Record<string, string> = {
    "ab": 'cl_a',
    "bb": 'cl_b',
    "cb": 'cl_c',
  }

  set content(value:string){
    //this._content = value;
    //this.node.textContent = value;//this._content;
    var cont = value;
    for (let word in this.words){
      cont = cont.split(word).join(`<span class="${this.words[word]}">${word}</span>`);
    }
    const strings = cont.split('\n').map((line, i) => `
    <div>
      <span>${i} </span>
      <span>${line}</span>
      
    </div>`)
    this.node.innerHTML = strings.join('');
  }

 /* get content(){
    return this._content
  }*/

  constructor(parentNode:HTMLElement){
    super(parentNode, 'div', 'keyboard_output');

  }
}