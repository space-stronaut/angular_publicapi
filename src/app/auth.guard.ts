import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    // Periksa keberadaan local storage dengan nama 'email'
    const email = localStorage.getItem('email');
    if (!email) {
      // Jika tidak ada, redirect ke halaman tertentu (misalnya halaman login)
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
