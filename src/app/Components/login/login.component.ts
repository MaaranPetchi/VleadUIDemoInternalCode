import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/Login/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string;
  password: string;

  constructor(private loginservice: LoginService, private router: Router) {}

  onSubmit() {
    this.loginservice.login(this.username, this.password).subscribe(result => {
      if (result) {
        this.router.navigate(['/indexemp']);
      }
    });
  }
}