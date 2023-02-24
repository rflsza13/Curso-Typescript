
function review (nota: number | boolean){
    if(typeof nota === "number" && nota >= 1 && nota <= 5){
        console.log(`Sua nota foi ${nota} estrela(s)`);
        switch(nota){
            case 1:
                console.log('Sentimos muito :(');
                break;
            case 2:
                console.log('Poxa, seu feedback nos ajuda a melhorar constantemente');
                break;
            case 3:
                console.log('Agradecemos o feedback!');
                break;
            case 4:
                console.log('Que bom :) Volte sempre');
                break;
            case 5:
                console.log('Excelente :D Contamos com seu retorno!')
        }
    } else if(typeof nota === 'boolean'){
        console.log('Nenhuma nota detectada!')
    }
}
review(5);