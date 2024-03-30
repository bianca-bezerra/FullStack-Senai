import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  public usuario!: string;
  public senha!: string;

  constructor(private _loginService: LoginService, private _router: Router) { }

  fazerLogin() {
    this._loginService.login(this.usuario, this.senha);
    this._router.navigate(['/restrito/lista']);
    this._loginService.setMostrarMenu(false);
  }
}
