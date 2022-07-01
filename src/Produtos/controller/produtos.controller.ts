import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ProdutosService } from "src/Produtos/services/produtos.service";
import { Produto } from "../models/produto.model";

@Controller('produtos')
export class ProdutosController {

  constructor(
    private produtosService: ProdutosService
  ) { }

  @Get()
  obterTodos(): Produto[] {
    return this.produtosService.obterTodos();
  }

  @Get(':id')
  obterUm(@Param() parans): Produto {
    return this.produtosService.obterUm(parans.id);
  }

  @Post()
  criar(@Body() produto: Produto) {
    produto.id = 3;
    this.produtosService.criar(produto);
  }

  @Put(':id')
  Editar(@Param() parans, @Body() produto: Produto): Produto {
    return this.produtosService.alterar(produto);
  }

  @Delete(':id')
  Apagar(@Param() parans) {
    this.produtosService.deletar(parans.id)
  }
}