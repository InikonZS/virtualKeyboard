import Control from "../common/control";

export class Key extends Control{
  private onInput: (char:string)=>void;
  private data:string;

  constructor(parentNode:HTMLElement, data:string, onInput: (char:string)=>void){
    super(parentNode);
    this.data = data;
    this.onInput = onInput;
    this.node.textContent = data;
    this.node.onmousedown = ()=>{

    }

    this.node.onmouseup = ()=>{
      this.input();
    }

    this.node.onmouseenter = ()=>{
      
    }

    this.node.onmouseleave = ()=>{
      
    }
  }

  handleDown(){
    this.input();
  }

  handleUp(){

  }

  protected input(){
    this.onInput(this.data);
  }

  setData(data:string){
    this.data = data;
    this.node.textContent = data;
  }
}