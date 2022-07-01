import { Module } from '@nestjs/common';
import { ProdutosModule } from './modules/produtos.module';



@Module({
  imports: [ProdutosModule]
})
export class AppModule {}
