import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public mostraMenu = new Subject<boolean>();

  constructor() { }

  login(Usuario: string, senha: string): void {
    if(Usuario=="aluno" && senha == "1234"){
      localStorage.setItem('token','queer1234');
      this.mostraMenu.next(false);
    } else {
      this.mostraMenu.next(true);
    }
  }

  setMostrarMenu(valor: boolean){
    this.mostraMenu.next(valor);
  }

  getMostrarMenu(){
    return this.mostraMenu.asObservable();
  }
}
