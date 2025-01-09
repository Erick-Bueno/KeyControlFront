import { LoginStats } from "@enums/login-stats";
import { LoginResponse } from "../responses/login-response";
import { createReducer, on } from "@ngrx/store";
import { authActions } from "./auth.action";

export interface LoginState {
    user: LoginResponse | null,
    error: string | null
    status: LoginStats 
}

const initialState:LoginState = {
    error: null,
    status: LoginStats.pending,
    user: null
}

export const authReducer = createReducer(
    initialState,

    on(authActions.login, (state) => ({
        ...state,
        status: LoginStats.loading,
        error: null,
    })),

    on(authActions.loginSuccess, (state, {user}) => ({
        ...state,
        status: LoginStats.success,
        error: null,
        user: user
    })),

    on(authActions.loginFailure, (state, {error}) => ({
        ...state,
        status: LoginStats.success,
        error: error,
        user: null
    }))
)