import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { SsrService } from '../services/ssr.service';
import { accessTokenSubject } from '../services/auth.service';

export const jwtInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  const ssrService = inject(SsrService);
  const router = inject(Router);
  const protectedUrls = [
    'http://localhost:8080/api/stations',
    'http://localhost:8080/api/users',
  ];

  const publicUrls = [
    'http://localhost:8080/api/auth/login',
    'http://localhost:8080/api/auth/register',
  ];

  const requiresAuthentication = protectedUrls.some(url => req.url.includes(url));
  const isPublicUrl = publicUrls.some(url => req.url.includes(url));

  // SSR Check
  if(ssrService.getIsServerSide) return next(req);

  // Public URL pass
  if (isPublicUrl) return next(req);
  // Authentication check
  if (requiresAuthentication) {
    // Retrieves Token & check its validity
    const accessToken = accessTokenSubject.value;
    const isAuthenticated = accessToken && accessToken.length > 0;
    // Token present & Valid
    if (isAuthenticated) {
      const authRequest = req.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken}`
        }
      });
      return next(authRequest);
    }
    // Token absent or invalid
    router.navigate(['/login']);
  }  
  return next(req);
};