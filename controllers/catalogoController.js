// const listaProdutos = [{ 
//     id: 1,
//     nome_produto: "Moletom Monstrinho",
//     categoria: "Moletom",
//     preco: 59.90,
//     tamanho: "P",
//     imagem: "/images/img-home/34.01.03.9.19.003---AM.jpg",
// },
// {
//     id: 2,
//     nome_produto: "Moletom Street",
//     categoria: "Moletom",
//     preco: 69.90,
//     tamanho: "M",
//     imagem: "/images/img-produtos/produto2.jpg",
// },
// {
//     id: 3,
//     nome_produto: "Moletom Xadrez",
//     categoria: "Moletom",
//     preco: 59.90,
//     tamanho: "P",
//     imagem: "/images/img-produtos/produto3.webp",
// },
// {
//     id: 4,
//     nome_produto: "Moletom  Capuz",
//     categoria: "Moletom",
//     preco: 69.90,
//     tamanho: "P",
//     imagem: "/images/img-produtos/produto4.webp",
// },
// {
//     id: 5,
//     nome_produto: "Moletom  Let's Roll",
//     categoria: "Moletom",
//     preco: 79.90,
//     tamanho: "G",
//     imagem: "/images/img-produtos/produto6.webp",
// },
// {
//     id: 6,
//     nome_produto: "Calça Faixa Lateral",
//     categoria: "Calça",
//     preco: 59.90,
//     tamanho: "M",
//     imagem: "/images/img-produtos/produto7.webp",
// },
// {
//     id: 7,
//     nome_produto: "Camiseta Best Season",
//     categoria: "Camiseta",
//     preco: 49.90,
//     tamanho: "P",
//     imagem: "/images/img-produtos/produto8.webp",
// },
// {
//     id: 8,
//     nome_produto: "Camiseta Tigres",
//     categoria: "Camiseta",
//     preco: 49.90,
//     tamanho: "M",
//     imagem: "/images/img-produtos/produto9.webp",
// }]

const { Produto } = require ("../models/Produto")

const catalogoController = {
    catalogoProdutos:(req,res) =>{
        res.render('catalogo')
    }

}

module.exports = catalogoController