import { createReducer } from "@reduxjs/toolkit";
import { Message } from "../types/message";

const initialState: Message[] = [
  {
    id: 1,
    conversationId: 3,
    authorId: 4,
    timestamp: 4,
    body: "coucou",
  },
];

export const reducerMessages = createReducer(initialState, (builder) => {});
