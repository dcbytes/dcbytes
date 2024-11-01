import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../environment/environment';

export const baseUrlInterceptor: HttpInterceptorFn = (req, next) => {
  req = req.clone({
    url: `${environment.apiBaseUrl}/${req.url}`,
  });
  return next(req);
};
