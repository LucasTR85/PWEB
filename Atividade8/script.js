var idade=[45];
var sexo=[45];
var opiniao=[45];
var quantidade=0;
var porcentagem=0;
var media=0;
var mais_velha;
var mais_nova;
var qtde_homens=0;
var qtde_mulheres=0;

for(var x=0; x<3; x++){
    idade[x]=parseInt(prompt("Digite a sua idade:"));
    sexo[x]=prompt("Digite o sexo (M/F):");
    opiniao[x]=prompt("Qual a sua opinião:\n\n4. Ótimo\n3. Bom\n2. Regular\n1. Péssimo");
    media += idade[x];
    if(x == 0){
        mais_nova = idade[x];
        mais_velha = idade[x];
    }
    else{
        if(idade[x] < mais_nova){
            mais_nova = idade[x];
        }
        if(idade[x] > mais_velha){
            mais_velha = idade[x];
        }
    }
    if(opiniao[x] == 1){
        quantidade++;
    }
    if(opiniao[x] == 3 || opiniao[x] == 4){
        porcentagem++;
    }
    if(sexo[x] == "M"){
        qtde_homens++;
    }
    else{
        qtde_mulheres++;
    }

}

media = media/45;
porcentagem = (porcentagem/45) * 100;

alert("Resultados:" + "\n\nMedia de idade: " + media.toFixed(2) + "\nIdade da mais nova: " + mais_nova + "\nIdade da mais velha: " + mais_velha +
        "\nQuantide de Pessoas que respoderam péssimo: " + quantidade + "\nPorcetagem que respoderam ótimo ou bom: " + porcentagem.toFixed(2) + "%" + 
        "\nQuantidade de homens: " + qtde_homens + "\nQuantidade de mulheres: " + qtde_mulheres);



