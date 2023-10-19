import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getLoggedUserId } from "../utils/getLoggedUserId";

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
