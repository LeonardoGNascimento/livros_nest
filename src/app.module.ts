import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProdutosModule } from './modules/produtos.module';
import { Produto } from './Produtos/models/produto.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'produtos_nest',
      autoLoadModels: true
    }),
    SequelizeModule.forFeature([Produto]),
    ProdutosModule
  ],
})

export class AppModule { }
