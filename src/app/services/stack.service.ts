import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {StackItem} from "../models/StackItem";
import {ADD_STACK_ITEM, CLEAR_STACK} from "../actions/actions";
import {Observable} from "rxjs/Rx";

interface AppState {
  stack:Array<StackItem>;
}

@Injectable()
export class StackService {
  constructor(private store:Store<AppState>) { }

  getStack():Observable<Array<StackItem>> {
    return this.store.select('stack') as Observable<Array<StackItem>>;
  }

  addStackItem(item) {
    this.store.dispatch({ type: ADD_STACK_ITEM, payload: item});
  }

  clearStack() {
    this.store.dispatch({ type: CLEAR_STACK });
  }
}
