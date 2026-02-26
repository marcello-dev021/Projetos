export const Moedas = ['bitcoin', 'ethereum', 'cardano', 'dogecoin', 'litecoin']

const API_URL = "https://api.coingecko.com/api/v3/simple/price" 

export async function buscarPreco() {

    const ids = Moedas.join(",")
    const url = `${API_URL}?ids=${ids}&vs_currencies=brl`

    const response = await fetch(url)
    const dados = await response.json()

    return dados
}
 // --header 'x-cg-demo-api-key: <api-key>'"


 //vs_currencies=usd&ids=bitcoin&names=Bitcoin&symbols=btc" 

 
