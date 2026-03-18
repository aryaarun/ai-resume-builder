import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn = false;

  login(email: string, password: string): boolean {
    if (email === 'admin@test.com' && password === '1234') {
      if (typeof window !== 'undefined') {
        localStorage.setItem('user', email);
      }
      return true;
    }
    return false;
  }

  logout() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('user');
    }
  }

  isAuthenticated(): boolean {
      if (typeof window !== 'undefined') {
        return !!localStorage.getItem('user');
      }
      return false;
    }
}