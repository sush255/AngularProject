import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:5059/api/Authenticate/login'; // Replace with actual login API endpoint
  private registerUrl = 'http://localhost:5059/api/Authenticate/register';
  private getUsersUrl = 'http://localhost:5059/api/Authenticate/getUsers';

  constructor(private http: HttpClient, private router: Router) { }

  login(credentials: { username: string; Password: string }) {
    return this.http.post(this.loginUrl, credentials);
  }
  register(credentials: { username: string; email: string; Password: string }) {
    return this.http.post(this.registerUrl, credentials)
  }
  getUsers() {
    return this.http.get(this.getUsersUrl);
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
