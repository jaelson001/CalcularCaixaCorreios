import Caixas from "./Caixas.js"

document.querySelector("#calcular").addEventListener("click", (e) => {
	e.preventDefault()

	document.querySelector("#erro").innerText = "Error here!"
	document.querySelector("#erro").style.display = "none"

	let altura = document.querySelector("#altura").value || 1
	let largura = document.querySelector("#largura").value || 1
	let profundidade = document.querySelector("#profundidade").value || 1
	let view = document.querySelector("#resultado")

	//higienização
	let objeto = {
		"altura":parseFloat(altura),
		"largura":parseFloat(largura),
		"profundidade":parseFloat(profundidade)
	}

	//calculo
	let resultado = {}
	try{
		resultado = getCaixa(objeto)
	}catch(e){
		document.querySelector("#erro").innerText = e.message
		document.querySelector("#erro").style.display = "block"
		view.innerHTML = '<img class="img-fluid" src="./placeholder.png">'
		return
	}
	renderizar(resultado, view)
})

function renderizar(caixa, view){
	let caixaEscolhida = caixa.message
	let div = document.createElement("div")
	div.classList.add("caixa_escolhida")
	let imagem = document.createElement("img")
	imagem.classList.add("img-fluid")
	imagem.src = caixaEscolhida.imagem
	div.appendChild(imagem)

	view.innerHTML = ""
	view.appendChild(div)
}

function getCaixa(obj){
	let medidas = [obj.altura, obj.largura, obj.profundidade]
	medidas = medidas.sort()

	let resultado = Caixas.filter( (item) => {
		return (item.altura >= medidas[0] && item.largura >= medidas[1] && item.profundidade >= medidas[2])
	})
	if(resultado.length == 0){
		throw new Error("Nenhuma caixa tem tamanho compativel!")
	}else{
		return {
			"status":"success",
			"message":resultado[0]
		}	
	}
	
}
