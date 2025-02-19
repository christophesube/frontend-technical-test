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
  conversationsisLoading: boolean;
  messagesAreLoaded: boolean;
  inputValue: string;
  users: User[];
  selectedUser: number;
  deleteIsOnError: boolean;
  newConversationId: number;
}

const initialState: initialStateProps = {
  conversations: [],
  messages: [],
  conversationsAreLoaded: false,
  conversationsisLoading: false,
  messagesAreLoaded: false,
  inputValue: "",
  users: [],
  selectedUser: null,
  deleteIsOnError: false,
  newConversationId: null,
};

export const reducerMessages = createReducer(initialState, (builder) => {
  builder
    .addCase(actionGetConversations.fulfilled, (state, action) => {
      state.conversationsisLoading = false;
      state.conversationsAreLoaded = true;
      state.conversations = action.payload;
    })
    .addCase(actionGetConversations.pending, (state, action) => {
      state.conversationsisLoading = true;
    })
    .addCase(actionGetConversations.rejected, (state, action) => {
      state.conversationsAreLoaded = false;
      state.conversationsisLoading = false;
    })
    .addCase(actionCreateConversations.fulfilled, (state, action) => {
      state.conversations.push(action.payload);
      state.newConversationId = action.payload.id;
    })
    .addCase(actionGetMessages.fulfilled, (state, action) => {
      state.messages = action.payload;
      state.messagesAreLoaded = true;
      state.deleteIsOnError = false;
    })
    .addCase(actionSetinputValue, (state, action) => {
      state.inputValue = action.payload;
    })
    .addCase(actionSetSelectedUser, (state, action) => {
      state.selectedUser = action.payload;
    })
    .addCase(actionCreateMessage.fulfilled, (state, action) => {
      state.messages.push(action.payload);
      state.inputValue = "";
    })
    .addCase(actionGetAllUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    })
    .addCase(actionDeleteMessage.fulfilled, (state, action) => {
      state.deleteIsOnError = false;
    })
    .addCase(actionDeleteMessage.rejected, (state) => {
      state.deleteIsOnError = true;
    });
});
