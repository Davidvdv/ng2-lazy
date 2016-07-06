import {ActionReducer, Action} from '@ngrx/store';
import {StackItem} from '../models/StackItem';
import {ADD_STACK_ITEM, CLEAR_STACK, DELETE_STACK_ITEM} from "../actions/actions";

export const stackReducer:ActionReducer<Array<StackItem>> = (state:Array<StackItem> = [], action:Action) => {
  console.log(state, action)
  switch (action.type) {
    case ADD_STACK_ITEM:
          return [...state, action.payload];

    case CLEAR_STACK:
          state = [];
          return state;

    case DELETE_STACK_ITEM:
          return state.filter((item) => item.name !== action.payload.name);

    default:
          return state;
  }
};
