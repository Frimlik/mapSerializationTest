import {
  Action,
  ActionReducer,
  ActionReducerMap,
  MetaReducer,
} from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { mapReducer } from './reducers';

export class AppState {
  map: Map<number, string>;
}

export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({
    keys: [
      {
        map: {
          serialize: (map) => JSON.stringify(map),
          deserialize: (map) => JSON.parse(map),
        },
      },
      // overviews: {
      //   serialize: (value: any) => value,
      //   deserialize: (value: Record<string, any>) => value,
      //   replacer: (key, value) => (value instanceof Map ? Array.from(value.entries()) : value),
      //   reviver: (key, value) => (key === "" ? new Map(value) : value == 'Consumption')
      // }
    ] /* reducerKeys*/,
    rehydrate: true,
    removeOnUndefined: true,
    restoreDates: true,
  })(reducer);
}

export function debugReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state: AppState, action: Action) => {
    const newState = reducer(state, action);

    console.log(`:: ${action.type}`, {
      _0_state: state,
      _1_action: action,
      _2_newState: newState,
    });

    return newState;
  };
}

export const metaReducers: MetaReducer<AppState>[] = [
  debugReducer,
  localStorageSyncReducer,
];

export const reducers: ActionReducerMap<AppState> = {
  map: mapReducer,
};
