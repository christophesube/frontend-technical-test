import { createReducer } from "@reduxjs/toolkit";
import { Message } from "../types/message";
import { actionSetUserIdLogged } from "./actions";
import { actionGetConversations, actionGetMessages } from "./thunks";
import { Conversation } from "../types/conversation";

interface initialStateProps {
  conversations: Conversation[];
  messages: Message[];
  messagesAreLoaded: boolean;
}

const initialState: initialStateProps = {
  conversations: [],
  messages: [],
  messagesAreLoaded: false,
};

export const reducerMessages = createReducer(initialState, (builder) => {
  builder
    .addCase(actionGetConversations.fulfilled, (state, action) => {
      state.conversations = action.payload.data;
    })
    .addCase(actionGetMessages.fulfilled, (state, action) => {
      state.messages = action.payload.data;
      state.messagesAreLoaded = true;
    });
});
