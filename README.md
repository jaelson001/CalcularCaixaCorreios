# <img src="https://github.com/jaelson001/CalcularCaixaCorreios/blob/master/favicon.png?raw=true" width="50px" height="50px"> Calculo de tamanho de caixa para produtos 
Esse mini app ajuda a escolher a caixa ideal com base nas medidas do produto e nas caixas padrão disponibilizadas pelos correios
### alguns detalhes devem ser levados em consideração:
- O app não leva em consideração se o produto é de um tipo que deve estar com um lado para cima sempre (como tvs e afins)
- O app usa um conjunto de dados interno quepode mudar com o tempo, isso acontece para tornar o app utilizavel offline ou ter reuso com otras empresas que não sejam os correios
###uma função acessivel via terminal foi adicionada, para acessar:
- Digite `node lambdaIndex [altura] [largura] [profundidade] ` no terminal
- A saída será uma string com o nome da caixa ou uma mensagem de excessão caso não haja caixa disponível
- Caso uma entrada inválida uma ajuda rápida informará o modo de uso 
