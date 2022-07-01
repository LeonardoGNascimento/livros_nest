import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Produto } from "./produto.module";

@Controller('produtos')
export class ProdutosController {

  produtos: Produto[] = [
    new Produto('LIVRO001', 'Código limpo', 60.00),
    new Produto('LIVRO002', 'Arquitetura limpa', 70.00),
    new Produto('LIVRO003', 'Php para front-ends', 30.00)
  ];

  @Get()
  obterTodos(): Produto[] {
    return this.produtos;
  }

  @Get(':id')
  obterUm(@Param() parans): Produto {
    return this.produtos[parans.id];
  }

  @Post()
  criar(@Body() produto: Produto) {
    produto.id = 3;
    this.produtos.push(produto)
  }

  @Put(':id')
  Editar(@Param() parans, @Body() produto:Produto): Produto {
    return produto;
  }

  @Delete(':id')
  Apagar(@Param() parans) {
    this.produtos.pop();
  }
}