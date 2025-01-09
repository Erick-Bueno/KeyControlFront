import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "./app.state";
import { authReducer } from "@states/auth/state/auth.reducer";

export const appReducers: ActionReducerMap<AppState> = {
    login: authReducer
}