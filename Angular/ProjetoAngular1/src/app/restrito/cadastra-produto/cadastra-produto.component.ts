import { Component } from '@angular/core';
import { Produto } from '../../models/Produto.model';
import { ProdutoService } from '../../produto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastra-produto',
  templateUrl: './cadastra-produto.component.html',
  styleUrl: './cadastra-produto.component.css'
})
export class CadastraProdutoComponent {

  public produto: Produto = new Produto(0,"","","",0);

  constructor(private _produtoService: ProdutoService,private _router : Router){}

  cadastrar(): void{
    this._produtoService.cadastrarProduto(this.produto).subscribe(
      produto => {
        alert("Cadastrado com sucesso!!")
      },
      err => {
        alert("Erro ao cadastrar...")
      }
    );

    this._router.navigate(["restrito/lista"])
  }
}
