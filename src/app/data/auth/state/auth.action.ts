import { createAction, props } from "@ngrx/store";
import { LoginResponse } from "../responses/login-response";


const login = createAction(
    '[Auth] Login',
    props<{ email: string, password: string }>()
)

const loginSuccess = createAction(
    '[Auth] Login Success',
    props<{ user: LoginResponse }>()
);

const loginFailure = createAction(
    '[Auth] Login Failure',
    props<{ error: string }>()
)

export const authActions = {
    login,
    loginSuccess,
    loginFailure
}