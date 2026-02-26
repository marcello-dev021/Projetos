import { buscarPreco, Moedas } from "./serverAPI.js";
 let moedas = []
function rederizar() {
    
    
}
async function atualizar() {
    try {
        const dados = await buscarPreco()

       moedas = [
        {nome: 'bitcoin', preco: dados.bitcoin.brl},
        {nome: 'ethereum', preco: dados.ethereum.brl},
        {nome: 'cardano', preco: dados.cardano.brl},
        {nome: 'dogecoin', preco: dados.dogecoin.brl},
        {nome: 'litecoin', preco: dados.litecoin.brl}
       ]
        console.log(moedas)
    } catch (err) {
        console.log('deu ruim na atualização')
    }
   
}
atualizar()
