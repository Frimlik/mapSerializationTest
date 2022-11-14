import { createAction, props } from "@ngrx/store";

export const setMap = createAction('Set map', props<{ index: number }>())