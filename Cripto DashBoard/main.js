import { buscarPreco, Moedas } from "./serverAPI.js";

let listaMoedas = document.querySelector("#listaMoedas")
document.querySelector("#btnAtualizar").addEventListener("click", atualizar);
document.querySelector("#filter").addEventListener("input", (e) => {
    const termo = e.target.value.toLowerCase();
    const filtradas = moedas.filter(({ nome }) => nome.includes(termo));
    rederizar(filtradas);
});



let moedas = []


function rederizar(dados) {
    listaMoedas.innerHTML = dados.map(({ nome, preco }) => `
   <div>
        <h3>${nome}</h3>
        <p id = "listaMoeda">${preco}</p>

   </div>`).join('')


}
async function atualizar() {
    try {
        const dados = await buscarPreco()

        moedas = [
            { nome: 'bitcoin', preco: dados.bitcoin.brl },
            { nome: 'ethereum', preco: dados.ethereum.brl },
            { nome: 'cardano', preco: dados.cardano.brl },
            { nome: 'dogecoin', preco: dados.dogecoin.brl },
            { nome: 'litecoin', preco: dados.litecoin.brl }
        ]
        rederizar(moedas)

    } catch (err) {
        console.log('deu ruim na atualização')
    }

}
