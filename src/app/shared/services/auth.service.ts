import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedInSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  constructor(private router: Router) {}

  login(credentials: { email: string; password: string }): boolean {
    const validEmail = 'wapolAdmin@gmail.com';
    const validPassword = 'password';

    if (
      credentials.email === validEmail &&
      credentials.password === validPassword
    ) {
      this.isLoggedInSubject.next(true);
      return true;
    } else {
      this.isLoggedInSubject.next(false);
      return false;
    }
  }

  logout(): void {
    this.isLoggedInSubject.next(false);
    this.router.navigate(['/login']);
  }

  isLoggedIn(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable();
  }
}