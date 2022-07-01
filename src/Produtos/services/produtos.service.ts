import { Injectable } from "@nestjs/common";
import { Produto } from "../models/produto.model";

@Injectable()
export class ProdutosService { 
  produtos: Produto[] = [
    new Produto('LIVRO001', 'Código limpo', 60.00),
    new Produto('LIVRO002', 'Arquitetura limpa', 70.00),
    new Produto('LIVRO003', 'Php para front-ends', 30.00)
  ];

  obterTodos(): Produto[] {
    return this.produtos;
  }

  obterUm(id:Number): Produto {
    return this.produtos[1];
  }

  criar(produto: Produto) {
    this.produtos.push(produto);
  }

  alterar(produto: Produto): Produto {
    return produto;
  }

  deletar(id: Number) {
    this.produtos.pop();
  }
}
