export class Produto {
  id: Number;
  codigo: String;
  nome: String;
  preco: Number;

  constructor(codigo: String, nome: String, preco: Number) {
    this.codigo = codigo;
    this.nome = nome;
    this.preco = preco;
  }
}
