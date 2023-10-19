import { createReducer } from "@reduxjs/toolkit";
import { Message } from "../types/message";
import { actionSetUserIdLogged } from "./actions";
import { actionGetConversations } from "./thunks";
import { Conversation } from "../types/conversation";

interface initialStateProps {
  conversations: Conversation[];
  messages: Message[];
}

const initialState: initialStateProps = {
  conversations: [],
  messages: [],
};

export const reducerMessages = createReducer(initialState, (builder) => {
  builder.addCase(actionGetConversations.fulfilled, (state, action) => {
    state.conversations = action.payload.data;
  });
});
