import { createReducer } from "@reduxjs/toolkit";
import { Message } from "../types/message";
import { actionSetinputValue } from "./actions";
import {
  actionCreateMessage,
  actionGetConversations,
  actionGetMessages,
} from "./thunks";
import { Conversation } from "../types/conversation";

interface initialStateProps {
  conversations: Conversation[];
  messages: Message[];
  conversationsAreLoaded: boolean;
  messagesAreLoaded: boolean;
  inputValue: string;
}

const initialState: initialStateProps = {
  conversations: [],
  messages: [],
  conversationsAreLoaded: false,
  messagesAreLoaded: false,
  inputValue: "",
};

export const reducerMessages = createReducer(initialState, (builder) => {
  builder
    .addCase(actionGetConversations.fulfilled, (state, action) => {
      state.conversations = action.payload.data;
      state.conversationsAreLoaded = true;
    })
    .addCase(actionGetMessages.fulfilled, (state, action) => {
      state.messages = action.payload.data;
      state.messagesAreLoaded = true;
    })
    .addCase(actionSetinputValue, (state, action) => {
      state.inputValue = action.payload;
    })
    .addCase(actionCreateMessage.fulfilled, (state, action) => {
      console.log(action.payload.data);
      state.messages.push(action.payload.data);
      state.inputValue = "";
    });
});
