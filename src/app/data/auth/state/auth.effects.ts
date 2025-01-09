import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { LoginService } from "../services/login/login.service";
import { authActions } from "./auth.action";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { LoginRequest } from "../requests/login-request";
import { CookieService } from 'ngx-cookie-service'; 

export const loginEffect = createEffect(
    (actions$ = inject(Actions), loginService = inject(LoginService)) => {
        return actions$.pipe(
            ofType(authActions.login),
            switchMap(action => loginService.login(new LoginRequest(action.email, action.password)).pipe(
                map((user) => authActions.loginSuccess({ user })),
                catchError((error) => of(authActions.loginFailure({ error })))
            ))
        )
    }, { functional: true }
)

export const saveUserInCookiesEffect = createEffect(
    (actions$ = inject(Actions), cookieService = inject(CookieService)) => {
        return actions$.pipe(
            ofType(authActions.loginSuccess),
            tap(({user}) => {
                cookieService.set("user", JSON.stringify(user))
            })
        )
    },  { functional: true }
)