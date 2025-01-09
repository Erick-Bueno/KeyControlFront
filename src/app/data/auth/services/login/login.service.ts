import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { environment } from '@environments/environment.development';
import { Observable } from 'rxjs';
import { LoginResponse } from '../../responses/login-response';
import { LoginRequest } from '../../requests/login-request';




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
