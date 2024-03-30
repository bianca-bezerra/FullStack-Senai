import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/Produto.model';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  public produtos: Produto[] = [];

  constructor(private _produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.listarProdutos();
  }

  listarProdutos(): void {
    this._produtoService.getProdutos().subscribe(
      retornProduto => {
        this.produtos = retornProduto.map(
          item => {
            return new Produto(
              item.id,
              item.produto,
              item.foto,
              item.descricao,
              item.preco
            );
          }
        )
      }
    )
  }

}
