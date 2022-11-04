import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userName = 'John';

  login(): void {
    this.userName = 'John';
  }

  logout(): void {
    this.userName = '';
  }
}
