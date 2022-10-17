do{
    var op = prompt("1. Jogar com CPU\n2. Jogar com Amigo\n3. Sair");
    switch(op){
        case '1':
        var escolha = prompt("Escolha um:\n\n1-Pedra\n2-Papel\n3-Tesoura");
        var escolhaPC = Math.random();
        if(escolhaPC <= 0.33 && escolha == 1){
            alert("CPU: Pedra\n\nEMPATE");
        }
        else if(escolhaPC <= 0.33 && escolha == 2){
            alert("CPU: Pedra\n\nVITÓRIA");
        }
        else if (escolhaPC <= 0.33 && escolha == 3){
            alert("CPU: Pedra\n\nDERROTA");
        }
        else if (escolhaPC <= 0.66 && escolha == 1){
            alert("CPU: Papel\n\nDERROTA");
        }
        else if(escolhaPC <= 0.66 && escolha == 2){
            alert("CPU: Papel\n\nEMPATE");
        }
        else if(escolhaPC <= 0.66 && escolha == 3){
            alert("CPU: Papel\n\nVITORIA");
        }
        else if(escolhaPC <= 0.99 && escolha == 1){
            alert("CPU: Tesoura\n\nVITÓRIA");
        }
        else if(escolhaPC <= 0.99 && escolha == 2){
            alert("CPU: Tesoura\n\nDERROTA");
        }
        else{
            alert("CPU: Tesoura\n\nEMPATE");
        }
        break;
        case '2':
        var escolha1 = prompt("Jogador 1:\n\n1-Pedra\n2-Papel\n3-Tesoura");
        var escolha2 = prompt("Jogador 2:\n\n1-Pedra\n2-Papel\n3-Tesoura");
        if(escolha1 == 1 && escolha2 == 1){
            alert("EMPATE");
        }
        else if(escolha1 == 1 && escolha2 == 2){
            alert("VITÓRIA Jogador 2");
        }
        else if(escolha1 == 1 && escolha2 == 3){
            alert("VITÓRIA Jogador 1");
        }
        else if(escolha1 == 2 && escolha2 == 1){
            alert("VITÓRIA Jogador 1");
        }
        else if(escolha1 == 2 && escolha2 == 2){
            alert("EMPATE");
        }
        else if(escolha1 == 2 && escolha2 == 3){
            alert("VITORIA Jogador 2");
        }
        else if(escolha1 == 3 && escolha2 == 1){
            alert("VITÓRIA Jogador 2");
        }
        else if(escolha1 == 3 && escolha2 == 2){
            alert("VITÓRIA Jogador 1");
        }
        else{
            alert("EMPATE");
        }
        break;
    }
    }while(op!='3');