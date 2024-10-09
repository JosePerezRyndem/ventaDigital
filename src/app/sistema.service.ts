/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from './models/base-service';
import { ApiCatalogosConfiguration as __Configuration } from './models/api-catalogos-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from './models/strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
class SistemaService extends __BaseService {
  static readonly HomeIndexPath = '/';
  static readonly HomeWhoAmIPath = '/WhoAmI';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * WhoAmI Home
   * @return OK
   */
  HomeWhoAmIResponse(token: string): __Observable<__StrictHttpResponse<any>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `VentaDigital/WhoAmI`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });
    // Agregar Authorization  Bearer
    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<any>;
      })
    );
  }

  /**
   * WhoAmI Home
   * @return OK
   */
  HomeWhoAmI(token: string): __Observable<any> {
    return this.HomeWhoAmIResponse(token).pipe(
      __map(_r => _r.body as any)
    );
  }
}

module SistemaService {
}

export { SistemaService }
