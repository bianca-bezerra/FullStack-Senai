export class Produto {

    id: number = 0;
    produto: string = "";
    foto: string = "";
    descricao: string = "";
    preco: number = 0;

    constructor(id: number, produto: string, foto: string, descricao: string, preco: number) {
        this.id = id;
        this.produto = produto;
        this.foto = foto;
        this.descricao = descricao;
        this.preco = preco;
    }
}