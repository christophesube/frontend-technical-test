import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getLoggedUserId } from "../utils/getLoggedUserId";
import { RootState } from "./store";

export const actionGetConversations = createAsyncThunk(
  "GET_CONVERSATIONS",
  async () => {
    const userIdLogged = getLoggedUserId();
    const results = await axios(
      `http://localhost:3005/conversations/${userIdLogged}`
    );
    return results;
  }
);

export const actionGetMessages = createAsyncThunk(
  "GET_MESSAGES",
  async (arg) => {
    const results = await axios(`http://localhost:3005/messages/${arg}`);
    return results;
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
    return results;
  }
);

export const actionDeleteMessage = createAsyncThunk(
  "DELETE_MESSAGE",
  async (arg: number) => {
    const results = await axios.delete(`http://localhost:3005/message/${arg}`);
    return results;
  }
);
