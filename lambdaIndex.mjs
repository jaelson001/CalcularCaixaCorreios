import Caixas from "./Caixas.js"

let entrada = process.argv

function calcular(entrada){
	if(entrada.length != 5){
		console.info("Modo de uso: \n\tnode lambdaIndex [altura] [largura] [profundidade]\n")
		return
	}
	let altura = entrada[3] || 1
	let largura = entrada[4] || 1
	let profundidade = entrada[5] || 1

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
		console.log(e.message)
		return
	}
	console.log(resultado)
	return
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
		return resultado[0].nome
	}
	
}


calcular(entrada)