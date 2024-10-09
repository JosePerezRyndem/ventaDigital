/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';
import { CatAplicacion } from './models/cat-aplicacion';
import { StrictHttpResponse as __StrictHttpResponse } from './models/strict-http-response';
import { QueryInfo } from './models/query-info';
import { QueryResultCatAplicacion } from './models/query-result-cat-aplicacion';
import { CatAspectoEvaluacion } from './models/cat-aspecto-evaluacion';
import { BaseService as __BaseService } from './models/base-service';
import { ApiCatalogosConfiguration as __Configuration } from './models/api-catalogos-configuration';


@Injectable({
  providedIn: 'root',
})
class CatalogosService extends __BaseService {

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Guardar o actualizar catAplicacion
   * @param catAplicacion catAplicacion
   * @return OK
   */
  catAplicacionGuardarOActualizarResponse(catAplicacion: CatAplicacion): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = catAplicacion;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/catAplicacion`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }

  /**
   * Guardar o actualizar catAplicacion
   * @param catAplicacion catAplicacion
   * @return OK
   */
  catAplicacionGuardarOActualizar(catAplicacion: CatAplicacion): __Observable<string> {
    return this.catAplicacionGuardarOActualizarResponse(catAplicacion).pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * Consultar lista paginada de catAplicacion
   * @param info Objeto con filtros y ordenamiento
   * @return OK
   */
  catAplicacionQueryResultResponse(info: QueryInfo): __Observable<__StrictHttpResponse<QueryResultCatAplicacion>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = info;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/catAplicacion`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<QueryResultCatAplicacion>;
      })
    );
  }

  /**
   * Desactivar registro de catAplicacion
   * @param idcatAplicacion Identificador de registro de catAplicacion
   * @return OK
   */
  catAplicacionDesactivarResponse(idcatAplicacion: string): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (idcatAplicacion != null) __params = __params.set('idcatAplicacion', idcatAplicacion.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/catAplicacion`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }

  /**
   * Desactivar registro de catAplicacion
   * @param idcatAplicacion Identificador de registro de catAplicacion
   * @return OK
   */
  catAplicacionDesactivar(idcatAplicacion: string): __Observable<string> {
    return this.catAplicacionDesactivarResponse(idcatAplicacion).pipe(
      __map(_r => _r.body as string)
    );
  }


  productCategoryResponse(): __Observable<__StrictHttpResponse<any>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    // if (idCatAspectoEvaluacion != null) __params = __params.set('idCatAspectoEvaluacion', idCatAspectoEvaluacion.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `VentaDigital/ProductCategory`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CatAspectoEvaluacion>;
      })
    );
  }

}

module CatalogosService {
}

export { CatalogosService }
