import { AppState } from "../../../state/app.state";

export const userSelector = 
    (appState: AppState) => appState.login.user;

export const loginErrorSelector =
    (appState: AppState) => appState.login.error;
