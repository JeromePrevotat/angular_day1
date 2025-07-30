import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SsrService {
  platformId = inject(PLATFORM_ID);

  constructor() { }

  isServerSide(): boolean {
    // Check if the platform is server-side
    return !isPlatformBrowser(this.platformId);
  }

  get getIsServerSide(): boolean {
    return this.isServerSide();
  }
}
