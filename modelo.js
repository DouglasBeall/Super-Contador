function contar(){
    let numInicio = document.getElementById('numInicio');
    let numFim = document.getElementById('numFim');
    let numPasso = document.getElementById('numPasso');
    let res = document.getElementById('res');

    if (numInicio.value.length == 0 || numFim.value.length == 0 || numPasso.value.length == 0){
        alert('[ERRO] Faltam Dados!');
        res.innerHTML = 'Impossível Contar!!'
    }else{
        res.innerHTML = 'Contando: <br>'

        let inicio = Number(numInicio.value);
        let fim = Number(numFim.value);
        let passo = Number(numPasso.value);

        if (passo <= 0){
            alert('Passo Inválido');
            alert('Considerando Passo: 1');

            passo = 1
        }

        if(inicio < fim){
            // Contagem Crescente
            for(let c = inicio ; c <= fim ; c += passo){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }else{
            // Contagem Decrescente
            for(let c = inicio ; c >= fim ; c -= passo){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }

        res.innerHTML += `\u{1F3C1}`;

        
        

    }

    

}