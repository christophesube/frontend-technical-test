import { createReducer } from "@reduxjs/toolkit";
import { Message } from "../types/message";
import { User } from "../types/user";
import { Conversation } from "../types/conversation";
import { actionSetSelectedUser, actionSetinputValue } from "./actions";
import {
  actionCreateConversations,
  actionCreateMessage,
  actionDeleteMessage,
  actionGetAllUsers,
  actionGetConversations,
  actionGetMessages,
} from "./thunks";

interface initialStateProps {
  conversations: Conversation[];
  messages: Message[];
  conversationsAreLoaded: boolean;
  messagesAreLoaded: boolean;
  inputValue: string;
  users: User[];
  selectedUser: number;
}

const initialState: initialStateProps = {
  conversations: [],
  messages: [],
  conversationsAreLoaded: false,
  messagesAreLoaded: false,
  inputValue: "",
  users: [],
  selectedUser: null,
};

export const reducerMessages = createReducer(initialState, (builder) => {
  builder
    .addCase(actionGetConversations.fulfilled, (state, action) => {
      state.conversations = action.payload.data;
      state.conversationsAreLoaded = true;
    })
    .addCase(actionCreateConversations.fulfilled, (state, action) => {
      state.conversations.push(action.payload.data);
    })
    .addCase(actionGetMessages.fulfilled, (state, action) => {
      state.messages = action.payload.data;
      state.messagesAreLoaded = true;
    })
    .addCase(actionSetinputValue, (state, action) => {
      state.inputValue = action.payload;
    })
    .addCase(actionSetSelectedUser, (state, action) => {
      state.selectedUser = action.payload;
    })
    .addCase(actionCreateMessage.fulfilled, (state, action) => {
      console.log(action.payload.data);
      state.messages.push(action.payload.data);
      state.inputValue = "";
    })
    .addCase(actionGetAllUsers.fulfilled, (state, action) => {
      state.users = action.payload.data;
    })
    .addCase(actionDeleteMessage.fulfilled, (state, action) => {})
    .addCase(actionDeleteMessage.rejected, (state, action) => {});
});
