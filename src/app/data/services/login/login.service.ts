import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { environment } from '@environments/environment.development';
import { LoginRequest } from '@states/requests/login-request';
import { LoginResponse } from '@states/responses/login-response';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = environment.baseUrl
  constructor(private http: HttpClient) { }
  login(loginRequest: LoginRequest):Observable<LoginResponse>{
    return this.http.post<LoginResponse>(`${this.url}/auth/login`, loginRequest);
  }
}
