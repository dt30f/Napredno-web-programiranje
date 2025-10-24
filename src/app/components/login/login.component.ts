import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  password : string = '';
  email: string = '';
  jwt: string = '';
    constructor(private authService: AuthService, private router: Router) {
    }
    login(): void {
      if (this.authService.login(this.email, this.password)) {
        this.router.navigate(['/']);
      } else {
        alert('Pogrešan email ili lozinka.');
      }
    }
}
