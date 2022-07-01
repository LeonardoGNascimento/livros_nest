import { Module } from "@nestjs/common";
import { ProdutosController } from "src/Produtos/controller/produtos.controller";
import { ProdutosService } from "src/Produtos/services/produtos.service";

@Module({
    controllers: [ProdutosController],
    providers: [ProdutosService],
})
export class ProdutosModule {}