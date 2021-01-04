const dino = document.querySelector('.dino');
//use e abuse do console log para saber se estou no caminho certo

//capturando quando pressionado espaço
function handleKeyUp(event){
    if(event.keyCode === 32){
        //chamando a funcao
        jump();
    }
}

//Função para dino saltar
function jump(){
    let position = 0;

    //com esta funcao, executa o codigo dentro do bloco de maneira repetida
    let upInterval = setInterval(() => {
        if(position >= 150){
            clearInterval(upInterval);
            //descendo                    
            let downInterval = setInterval(() => {
                if(position <=0){
                    clearInterval(downInterval)
                }else{
                    position -= 20;
                    dino.style.bottom = position + 'px';
                }    
            }, 20);                                    
        }else{           
            //codigo executado a cada 20ms, subindo
            position += 20;
            
            //na propriedade abaixo vai se passando o valor com px para a propriedade
            //com isso vai saltando a medida que esse número aumenta
            dino.style.bottom = position + 'px'; 
        }        

    }, 20);
}

//capturando quando pressiono tecla
document.addEventListener('keyup', handleKeyUp);