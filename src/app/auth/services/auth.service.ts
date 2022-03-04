import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, Observable } from 'rxjs';

import { IRegisterRequest } from '../types/registerRequest.interface';
import { ICurrentUser } from '../../shared/types/current-user.interface';
import { environment } from '../../../environments/environment';
import { IAuthResponse } from '../types/authResponse.interface';
import { ILoginRequest } from '../types/loginRequest.interface';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  public register(data: IRegisterRequest): Observable<ICurrentUser> {
    const url = `${environment.apiUrl}/users`;

    return this.http.post<IAuthResponse>(url, data).pipe(map(this.getUser));
  }

  public login(data: ILoginRequest): Observable<ICurrentUser> {
    const url = `${environment.apiUrl}/users/login`;

    return this.http.post<IAuthResponse>(url, data).pipe(map(this.getUser));
  }

  public getCurrentUser(): Observable<ICurrentUser> {
    const url = `${environment.apiUrl}/user`;

    return this.http.get<IAuthResponse>(url).pipe(map(this.getUser));
  }

  private getUser(response: IAuthResponse): ICurrentUser {
    return response.user;
  }
}
