import { buscarPreco, Moedas } from "./serverAPI.js";
 let moedas = []
function rederizar() {
    
    
}
async function atualizar() {
    try {
        const dados = await buscarPreco()

       moedas = [
        {nome: 'bitcoin', preco: dados.bitcoin.brl}
       ]
        console.log(moedas)
    } catch (err) {
        console.log('deu ruim na atualização')
    }
   
}
atualizar()
