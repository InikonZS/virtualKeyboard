import { Key } from "./key";

export class KeyCapsLock extends Key{
  protected input(){
    //this.onInput(this.data);
    const state = this.state;
    state.data = {
      ...state.data, 
      caps: !state.data.caps
    }
    if (state.data.caps){
      this.node.classList.add('keyboard_key__down');
    } else {
      this.node.classList.remove('keyboard_key__down');
    }
    
  }

  protected down(){  
  }

  protected up(){ 
  }
}