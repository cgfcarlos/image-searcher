import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { ToastService } from "../../shared/components/toast";
import { environment } from "../../../environments/environment";

/**
 * Interceptor http para agregar cabeceras de autenticacion
 *
 * @export
 * @class HttpInterceptorService
 * @implements {HttpInterceptor}
 */
@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

    constructor(private toastService: ToastService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const headers = new HttpHeaders().set('Authorization', `Client-ID ${environment.accessKey}`);
        req = req.clone({ headers });
        return next.handle(req).pipe(
            catchError((error: HttpErrorResponse) => {
                if (error.status !== 200) {
                    this.toastService.show({
                        type: 'error',
                        text: `${error.status}: Error al procesar la solicitud`
                    })
                }
                return throwError(error);
            })
        );
    }

}