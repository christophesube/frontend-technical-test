import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getLoggedUserId } from "../utils/getLoggedUserId";
import { RootState } from "./store";
import { create } from "domain";

export const actionGetConversations = createAsyncThunk(
  "GET_CONVERSATIONS",
  async () => {
    const userIdLogged = getLoggedUserId();
    const results = await axios(
      `http://localhost:3005/conversations/${userIdLogged}`
    );
    const data = results.data;
    return data;
  }
);

export const actionCreateConversations = createAsyncThunk(
  "CREATE_CONVERSATION",
  async (arg: number, thunkApi) => {
    const state = thunkApi.getState() as RootState;
    const users = state.reducerMessages.users;
    const timestamp = Date.now();
    const myId = getLoggedUserId();
    const userToFind = users.find((user) => user.id == arg);
    const RecipientNickname = userToFind.nickname;
    const result = await axios.post(
      `http://localhost:3005/conversations/${arg}`,
      {
        senderId: myId,
        recipientId: arg,
        recipientNickname: RecipientNickname,
        lastMessageTimestamp: timestamp,
      }
    );
    const data = result.data;
    return data;
  }
);

export const actionGetMessages = createAsyncThunk(
  "GET_MESSAGES",
  async (arg: string) => {
    const results = await axios(`http://localhost:3005/messages/${arg}`);
    const data = results.data;
    return data;
  }
);

export const actionCreateMessage = createAsyncThunk(
  "CREATE_MESSAGE",
  async (arg: string, thunkApi) => {
    const userIdLogged = getLoggedUserId();
    const state = thunkApi.getState() as RootState;
    const inputValue = state.reducerMessages.inputValue;
    const timestamp = Date.now();
    const results = await axios.post(`http://localhost:3005/messages/${arg}`, {
      body: inputValue,
      timestamp: timestamp,
      authorId: userIdLogged,
      conversationId: parseInt(arg),
    });
    const data = results.data;
    return data;
  }
);

export const actionDeleteMessage = createAsyncThunk(
  "DELETE_MESSAGE",
  async (arg: number) => {
    const results = await axios.delete(`http://localhost:3005/message/${arg}`);
    return results;
  }
);

export const actionGetAllUsers = createAsyncThunk("GET_USERS", async () => {
  const results = await axios("http://localhost:3005/users");
  const data = results.data;
  return data;
});
