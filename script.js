const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isJumping = false;
let position = 0;

//use e abuse do console log para saber se estou no caminho certo

//capturando quando pressionado espaço
function handleKeyUp(event){
    if(event.keyCode === 32){
        if(!isJumping){
            //chamando a funcao
            jump();
        }        
    }
}

//Função para dino saltar
function jump(){
    isJumping = true;

    //com esta funcao, executa o codigo dentro do bloco de maneira repetida
    let upInterval = setInterval(() => {
        if(position >= 150){
            clearInterval(upInterval);
            //descendo                    
            let downInterval = setInterval(() => {
                if(position <=0){
                    clearInterval(downInterval)
                    isJumping = false;
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

function createCactus(){
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;

    //console.log(randomTime);

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {
        if(cactusPosition < -60){
            clearInterval(leftInterval);
            background.removeChild(cactus);
        }else if(cactusPosition > 0 && cactusPosition < 60 && position < 60){
            //Game over
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>';
        }else{
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }

    }, 20);

    setTimeout(createCactus, randomTime);
}

createCactus();

//capturando quando pressiono tecla
document.addEventListener('keyup', handleKeyUp);