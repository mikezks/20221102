import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../shared/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  needsLogin = false;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute) {

    this.route.paramMap.subscribe(
      params => {
        this.needsLogin = params.get('needsLogin') === 'true'
      }
    )
  }

  get userName() {
    return this.authService.userName;
  }

  login(): void {
    this.authService.login();
    this.needsLogin = false;
  }

  logout(): void {
    this.authService.logout();
  }
}
