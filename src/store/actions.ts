import { createAction } from "@reduxjs/toolkit";

export const actionSetUserIdLogged = createAction<number>("SET_USERID_LOGGED");
export const actionSetinputValue = createAction<string>("SET_INPUT_VALUE");
export const actionSetSelectedUser = createAction<number, string>(
  "SET_SELECTED_USER"
);
