import input from 'readline-sync';

let salarios = [
    {ano: 2010, valor: 510.00},
    {ano: 2011, valor: 545.00},
    {ano: 2012, valor: 622.00},
    {ano: 2013, valor: 678.00},
    {ano: 2014, valor: 724.00},
    {ano: 2015, valor: 788.00},
    {ano: 2016, valor: 880.00},
    {ano: 2017, valor: 937.00},
    {ano: 2018, valor: 954.00},
    {ano: 2019, valor: 998.00},
    {ano: 2020, valor: 1045.00},
]


let inflacoes = [
    {ano: 2010, ipca: 5.91},
    {ano: 2011, ipca: 6.50},
    {ano: 2012, ipca: 5.84},
    {ano: 2013, ipca: 5.91},
    {ano: 2014, ipca: 6.41},
    {ano: 2015, ipca: 10.67},
    {ano: 2016, ipca: 6.29},
    {ano: 2017, ipca: 2.95},
    {ano: 2018, ipca: 3.75},
    {ano: 2019, ipca: 4.31},
    {ano: 2020, ipca: 4.52},

]

console.log("Escolha uma opção");
console.log(" 1 - Listar os salários minímos de 2010 à 2020");
console.log(" 2 - Listar IPCA de 2010 à 2020");
console.log(" 3 - Comparação entre percentual de aumento salarial e o IPCA");

let opcao = input.question("Digite a opção escolhida: ");

switch(opcao) {
    case('1'):
        console.log("Lista de salarios minimos entre 2010 e 2020: ");
        break;
    case('2'): 
        console.log("Lista da inflação de 2010 à 2020");
        break;
    case('3'):
        console.log("****Comparação do percentual e aumento salarial entre 2010 e 2020****\n\n");
        break;
    default:
        console.log("Opção inválida!");
        break;
}

if(opcao == 1) {
    for(let propriedade in salarios){
        var array_salario = salarios[propriedade];
        console.log(`o salario do ano de ${array_salario.ano} é de ${array_salario.valor}R$`);
    }
} else if(opcao == 2) {
    for(let propriedade in inflacoes) {
        var inflacao = inflacoes[propriedade];
        console.log(`a inflação no ano de ${inflacao.ano} é de ${inflacao.ipca}%`);
    }
} else if (opcao == 3) {
    for(var propriedade in salarios) {
        var array_salarios = salarios[propriedade];
        var valor_salario = array_salarios.valor;
        console.log(`a inflação no ano ${inflacoes[propriedade].ano} foi de ${inflacoes[propriedade].ipca}%`)
        let anoAtual = propriedade;
        if(propriedade > 0){
            propriedade -= 1;
            var valor_ano_anterior = salarios[propriedade].valor;
        }
        let resultado = valor_salario - valor_ano_anterior;
        
            console.log(`a diferença de salarios entre o ano de ${salarios[propriedade].ano} e ${salarios[anoAtual].ano} é de: R$${resultado.toFixed(2)}\n`);
        }
}
    

