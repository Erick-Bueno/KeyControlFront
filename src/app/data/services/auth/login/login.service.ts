import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { environment } from '@environments/environment.development';
import { Observable, tap } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = environment.baseUrl
  constructor(private http: HttpClient, private injector: Injector) { }
  login() : Observable<any>{
    return new Observable
  }
}
