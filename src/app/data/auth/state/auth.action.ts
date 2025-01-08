import { createAction, props } from "@ngrx/store";


const login = createAction(
    '[Auth] Login', 
    props<{ email: string, password: string }>()
)

export const AuthActions = {
    login
}