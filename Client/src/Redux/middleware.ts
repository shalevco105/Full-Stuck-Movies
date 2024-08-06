import { Dispatch, PayloadAction, configureStore } from "@reduxjs/toolkit";
import { AppState } from "./store";

export const logger = (store: ReturnType<typeof configureStore<AppState>>) =>
    (next: Dispatch) =>
        (action: PayloadAction) => {
            console.log("Before the reducer: " + store.getState().user);
            const result = next(action);
            console.log("After the reducer: " + store.getState().user);

            return result;
        };



