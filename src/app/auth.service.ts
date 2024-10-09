import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

/* Models Imports */

/* Actions Imports */

/* Dev Tools */
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly urlApi;

  constructor(private http: HttpClient) {
    this.urlApi = 'https://172.24.32.38:9002';
    // this.urlApi = 'https://172.24.32.36:442';
  }

  connectTokenResponse(user: any): Observable<HttpResponse<any>> {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    const body = new URLSearchParams();
    body.append('grant_type', 'password');
    body.append('client_id', 'ro.client');
    body.append('scope', 'openid profile roles offline_access default');
    body.append('UserName', user.username);
    body.append('Password', user.password);

    const req = new HttpRequest<any>(
      'POST',
      `${this.urlApi}/connect/token`,
      body,
      {
        headers,
        responseType: 'json',
      },
    );

    return this.http.request<any>(req).pipe(
      filter((_r) => _r instanceof HttpResponse),
      map((_r) => {
        return _r as HttpResponse<any>;
      }),
    );
  }

  connectToken(user: any): Observable<any> {
    return this.connectTokenResponse(user).pipe(map((_r) => _r.body as any));
  }

}
