function animar(){
    const buttaoanimar = document.getElementById('btn-menu');
    buttaoanimar.classList.toggle('ativaranimacao');
}

function animar2(){
    const buttaoanimar2 = document.getElementById('btn-menu2');
    buttaoanimar2.classList.toggle('ativaranimacao');
}

function animar3(){
    const buttaoanimar3 = document.getElementById('btn-menu3');
    buttaoanimar3.classList.toggle('ativaranimacao');
}

function animar4(){
    const buttaoanimar4 = document.getElementById('btn-menu4');
    buttaoanimar4.classList.toggle('ativaranimacao');
}

const imgs = document.getElementById("imagem");
const img = document.querySelectorAll("#imagem img");

let idx = 0;

function carrossel(){
    idx++;

    if(idx > img.length - 1){
        idx = 0
    }

    imgs.style.transform = `translateX(${-idx * 100}%)`;
}

setInterval(carrossel, 2500);

const imgs2 = document.getElementById("imagem2");
const img2 = document.querySelectorAll("#imagem2 img");

let idx2 = 0;

function carrossel2() {
    idx2++;

    if (idx2 > img2.length - 1){
        idx2 = 0;
    }

    imgs2.style.transform = `translateX(${-idx2 * 100}%)`;
}

setInterval(carrossel2, 2500);

function menuShow(){
    let menumobile = document.querySelector('.menumobile')
    let navmobile = document.querySelector('.barra-navegacao')

    if (menumobile.classList.contains('open')){
        menumobile.classList.remove('open');
    } else {
        menumobile.classList.add('open');
    }

    if (navmobile.classList.contains('box')){
        navmobile.classList.remove('box');
    } else {
        navmobile.classList.add('box');
    }

    }
    
function apertarCor(itemnavegacao6){
    var cordotexto = document.getElementById('itemnavegacao')

    setTimeout(function() {
        cordotexto.style.color = 'gray';
    }, 500);
}

document.addEventListener('DOMContentLoaded', () => {

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

});

// ANIMAÇÕES CSS

document.addEventListener("DOMContentLoaded", function() {
    setInterval(function() {
      var botao = document.getElementById("baixarCV");
      botao.classList.toggle("up");
    }, 2000);
});

document.addEventListener("DOMContentLoaded", function(){
    
    var botaologo = document.getElementById("botaologo");
       if (botaologo){
            botaologo.addEventListener("click", function(){
                if(!botaologo.classList.contains("tremor")){
                    botaologo.classList.add("tremor");
                
                    setTimeout(function(){
                        botaologo.classList.remove("tremor");
                    }, 1000);
                }
            })
       }
});

document.addEventListener("DOMContentLoaded", function() {
    
    var voltarparaotop = document.getElementById("voltarparaotop");

    // Variáveis section 1
    var containersobre = document.getElementById("containersobre");
    containersobre.classList.add("show");

    // Variáveis section 2
    var habil = document.getElementById("habil");
    var textossobremim = document.getElementById("textossobremim");
    var postit = document.getElementById("postit");

    // Variáveis section 3

    var postit2 = document.getElementById("postit2");
    var frase = document.getElementById("frase");

    // Adiciona um evento de rolagem
    window.addEventListener("scroll", function() {
        
        //Variaveis para criar uma conta para rolagem da página
        var alturaPagina = document.documentElement.scrollHeight - window.innerHeight;
        var porcentagemRolagem = (window.scrollY / alturaPagina) * 100;
        
        // Rolagem Botão de voltar
        if (porcentagemRolagem > 35) { 
            voltarparaotop.classList.add("show");
        } else {
            voltarparaotop.classList.remove("show");
        }
        
        // Rolagem section 1
        if (porcentagemRolagem > 75) { 
            containersobre.classList.remove("show");
        } else {
            containersobre.classList.add("show");
        }

        // Rolagem section 2
        if (porcentagemRolagem > 10) {
            habil.classList.add("show");
            textossobremim.classList.add("show");
            postit.classList.add("show");
        } else {
            habil.classList.remove("show");      
            textossobremim.classList.remove("show");      
            postit.classList.remove("show");
        }

        // Rolagem section 3
        if (porcentagemRolagem > 70){
            postit2.classList.add("show");
            frase.classList.add("show");
        } else {
            postit2.classList.remove("show");
            frase.classList.remove("show");
        }
    })

    voltarparaotop.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth" 
        });
    });

});

/* MODAIS */
function abrirModal1(){
    const contatar = document.getElementById("Modal1")

    contatar.classList.add('abrir')

    contatar.addEventListener('click', (e) => {
            if(e.target.id == "fechar" || e.target.id == 'Modal1')
                contatar.classList.remove('abrir')
        })
    }

function abrirModal2(){
    const contatar = document.getElementById("Modal2")
    
    contatar.classList.add('abrir')
    
    contatar.addEventListener('click', (e) => {
            if(e.target.id == "fechar" || e.target.id == 'Modal2')
                contatar.classList.remove('abrir')
        })
    }
    
function abrirModal3(){
    const contatar = document.getElementById("Modal3")
        
    contatar.classList.add('abrir')
        
    contatar.addEventListener('click', (e) => {
            if(e.target.id == "fechar" || e.target.id == 'Modal3')
                contatar.classList.remove('abrir')
        })
    }
// Aba contato
function abrirContato(){
    const contatar = document.getElementById("janelacontato")

    contatar.classList.add('abrir')

    contatar.addEventListener('click', (e) => {
            if(e.target.id == "fechar" || e.target.id == 'janelacontato')
                contatar.classList.remove('abrir')
        })
    }

function obrigadoContato(){
    const obrigado = document.getElementById("obrigadoContato")

    obrigado.classList.add('abrir')

    obrigado.addEventListener('click', (e) => {
            if(e.target.id == "fecharcon" || e.target.id == 'janelacontato')
                obrigado.classList.remove('abrir')
        })
    }
    