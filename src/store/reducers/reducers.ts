import { createReducer, on } from '@ngrx/store';
import * as mapActions from '../actions';

export const mapReducer = createReducer(
  null,
  on(mapActions.setMap, (state, { index }) => {
    const newMap = new Map(state);
    newMap.set(index, 'Hello');
    return newMap;
  })
);
