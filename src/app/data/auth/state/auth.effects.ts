import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { authActions } from "./auth.action";
import { catchError, map, of, switchMap } from "rxjs";
import { LoginRequest } from "../../requests/login-request";
import { CookieService } from 'ngx-cookie-service';
import { HttpErrorResponse } from "@angular/common/http";
import { LoginService } from "@services/login/login.service";



export const loginEffect = createEffect(
  (actions$ = inject(Actions), loginService = inject(LoginService), cookieService = inject(CookieService)) => {
    return actions$.pipe(
      ofType(authActions.login),
      switchMap(action => loginService.login(new LoginRequest(action.email, action.password)).pipe(
        map((user) => {
          cookieService.set("user", JSON.stringify(user))
          return authActions.loginSuccess({ user })
        }),
        catchError((error: HttpErrorResponse) => {
          return of(authActions.loginFailure({ error: error.error }))
        })
      ))
    )
  }, { functional: true }
)



