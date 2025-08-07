import { inject, Injectable } from '@angular/core';
import { User } from '../models/user';
import { UserService } from './user.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SsrService } from './ssr.service';
import { AuthResponse } from '../models/auth-response';

export const accessTokenSubject = new BehaviorSubject<string | null>(null);

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = "http://localhost:8080/api/auth";
  private http = inject(HttpClient);
  private router = inject(Router);
  private ssrService = inject(SsrService);
  private userService = inject(UserService);

  // Subjects == emits its value when subscribed to
  private initializedSubject = new BehaviorSubject<boolean>(false);
  public initialized$ = this.initializedSubject.asObservable();

  private userSubject = new BehaviorSubject<User | null>(null);
  public user$ = this.userSubject.asObservable();

  private currentAccessToken$ = accessTokenSubject.asObservable();

  private currentRefreshToken: string | null = null;
  private authenticated: boolean = false;

  login({ username, password }: { username: string; password: string }){
    const response = this.http.post<AuthResponse>(`${this.apiUrl}/login`, { username, password });
    response.subscribe({
      next: (authResponse) => {
        console.log('Login successful, token received:', authResponse.accessToken);
        this.currentRefreshToken = authResponse.refreshToken;
        accessTokenSubject.next(authResponse.accessToken);
        this.authenticated = true;
        if(!this.ssrService.getIsServerSide) {
          // Store the token in localStorage
          localStorage.setItem('token', this.currentRefreshToken);
        }
        this.userService.getUserByToken(this.currentRefreshToken).subscribe({
          next: (user) => {
            this.setUser = user;
          },
          error: (error) => {
            console.error('Error fetching user by token:', error);
          }
        });
      },
      error: (error) => {
        console.error('Login failed:', error);
      }
    });
  }

  verifyAuth(redirectRoute: string | null) {
    // Only run this logic in the browser because of SSR
    if (this.ssrService.getIsServerSide) return;
    const token: string | null = localStorage.getItem('token');
    if(token){
      this.userService.getUserByToken(token).subscribe({
        next: (data: User) => {
          const user: User = data;
          this.setUser = user;
          this.isInitialized = true;
          if (redirectRoute) {
            // Redirect to the specified route after successful authentication
            this.router.navigate([redirectRoute]);
          }
        },
        error: (error) => {
          console.error('Error fetching user by token:', error);
          this.isInitialized = false;
          this.logout();
        }
      });
    } else {
      this.isInitialized = true;
    }
  }

  logout() {
    if(!this.ssrService.getIsServerSide) {
      localStorage.removeItem('token');
      this.setUser = null;
      this.router.navigate(['/login']);
    }
  }

  get getUser(): User | null {
    return this.userSubject.value;
  }
  
  set setUser(user: User | null) {
    this.userSubject.next(user);
  }

  get isInitialized(): boolean {
    return this.initializedSubject.value;
  }

  set isInitialized(value: boolean) {
    this.initializedSubject.next(value);
  }

  get isAuthenticated(): boolean {
    return this.authenticated;
  }

  set isAuthenticated(value: boolean) {
    this.authenticated = value;
  }

  get getCurrentRefreshToken(): string | null {
    return this.currentRefreshToken;
  }

  set setCurrentRefreshToken(token: string | null) {
    this.currentRefreshToken = token;
  }

  get getCurrentAccessToken(): string | null {
    return accessTokenSubject.value;
  }

  set setCurrentAccessToken(token: string | null) {
    accessTokenSubject.next(token);
  }

  constructor(){
    this.verifyAuth(null);
  }
}
