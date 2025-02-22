import { TestBed } from '@angular/core/testing';
import { LoginService } from './login.service';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { LoginResponse } from '@states/responses/login-response';
import { LoginRequest } from '@states/requests/login-request';
describe('LoginService', () => {
  let service: LoginService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[LoginService, provideHttpClient(),provideHttpClientTesting()],
    });
    service = TestBed.inject(LoginService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  })
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return login response', async () => {
    const expectedLoginResponse:LoginResponse = {
      externalId: "13245t347y23",
      accessToken: "fsdfcsafs32",
      email: "erickjb93@gmail.com",
      name: "erick",
      refreshToken: "dfgsdgd32"
    }
    const loginRequest:LoginRequest = {
      email: "erickjb93@gmail.com",
      password: "teste231"
    }
    service.login(loginRequest).subscribe(l => expect(l).toEqual(expectedLoginResponse))
    const req = httpMock.expectOne("http://localhost:5150/api/v1/auth/login")

    expect(req.request.method).toBe("POST")
    req.flush(expectedLoginResponse);
  })
});
