import { Key } from "./key";

export class KeyShift extends Key{
  protected input(){
  }

  protected down(){
    const state = this.state;
    state.data = {
      ...state.data, 
      shift: true
    }
    super.down();
  }

  protected up(){
    const state = this.state;
    state.data = {
      ...state.data, 
      shift: false
    }
    super.up();
  }
}