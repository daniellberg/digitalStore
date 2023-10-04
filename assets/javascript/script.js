const url = "http://127.0.0.1:5500/digitalStore/dados/produtos.json"

fetch(url)
    .then(function(response){
        return response.json()
    })

    .then(function (data){
       
        const produtosEmAlta = document.querySelector(".produtos-em-alta")
        
        for (const product of data) {
            const template = `<button class="kswiss">
                <h4 class="off-trinta-alta">30% OFF</h4>
                <h2 class="tenis-off-trinta"><img src="${product.imagem}" alt=""></h2>
            </button>
            <h6 class="kswiss-tenis">${product.categoria}</h6>
            <h4 class="kswiss-nome">K-Swiss V8 - Masculino</h4>
            <h4 class="kswiss-preco">R$ <strike>${product.preco}</strike> ${product.preco - product.desconto}</h4>`
        const div = document.createElement('div')
        div.innerHTML = template
        produtosEmAlta.appendChild(div)
        }
    })


// function puxaDados(response){
//     response = fetch(url)
//     data = response.json()

//     //retorna html
//     for (const produtos of data) {
        
//     }

// }    