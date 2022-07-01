import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

@Controller('produtos')
export class ProdutosController {

  @Get()
  obterTodos(): String {
    return 'Lista Todos os produtos';
  }

  @Get(':id')
  obterUm(@Param() parans): String {
    return `Retornar os dados do produto ${parans.id}`;
  }

  @Post()
  criar(@Body() produto): String {
    console.log(produto)
    return 'Produto criado';
  }

  @Put(':id')
  Editar(@Param() parans, @Body() produto): String {
    console.log(produto)
    return `Alterando livro ${parans.id}`
  }

  @Delete(':id')
  Apagar(@Param() parans):String {
    return `Apagando livro ${parans.id}`
  }
}