function animar(){
    const buttaoanimar = document.getElementById('btn-menu');
    buttaoanimar.classList.toggle('ativaranimacao')
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
    let subirbo = document.querySelector('.voltarparaotop')

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

        if (subirbo.classList.contains('sumir')){
            setTimeout(() =>{
                subirbo.classList.remove('sumir');
            }, 1000);
        } else {    
            subirbo.classList.add('sumir');
            
        }
    }

function apertarCor(itemnavegacao6){
    var cordotexto = document.getElementById('itemnavegacao')

    setTimeout(function() {
        cordotexto.style.color = 'gray';
    }, 500);
}

function mostrarDiv() {
    var escondido = document.getElementById('escondido1');
    var sections1 = document.querySelectorAll('.section1');
    var section2 = document.getElementById('section2');
    var botaosubir = document.getElementById('imagembotaoup');

    escondido.classList.toggle('show');
    section2.classList.toggle('pull');
    botaosubir.classList.toggle('up');

    if (escondido.classList.contains('show')) {
        setTimeout(function() {
            escondido.classList.add('zindex');
        }, 1000);
    } else {
        escondido.classList.remove('zindex');
    }

    sections1.forEach(function(section) {
        section.classList.toggle('expanded');
    });
}

function mostrarDiv2() {
    var escondido2 = document.getElementById('escondido2');
    var sections2 = document.querySelectorAll('.section2');
    var section3 = document.getElementById('section3');
    var botaosubir2 = document.getElementById('imagembotaoup2');

    escondido2.classList.toggle('show');
    botaosubir2.classList.toggle('up');
    section3.classList.toggle('pull');

    if (escondido2.classList.contains('show')) {
        setTimeout(function() {
            escondido2.classList.add('zindex');
        }, 1000);
    } else {
        escondido2.classList.remove('zindex');
    }

    sections2.forEach(function(section) {
        section.classList.toggle('expanded');
    });
}

function mostrarDiv3() {
    var escondido3 = document.getElementById('escondido3');
    var sections3 = document.querySelectorAll('.section3');
    var section4 = document.getElementById('section4');
    var botaosubir3 = document.getElementById('imagembotaoup3');

    escondido3.classList.toggle('show');
    botaosubir3.classList.toggle('up');
    section4.classList.toggle('pull');

    if (escondido3.classList.contains('show')) {
        setTimeout(function() {
            escondido3.classList.add('zindex');
        }, 1000);
    } else {
        escondido3.classList.remove('zindex');
    }

    sections3.forEach(function(section) {
        section.classList.toggle('expanded');
    });
}

function mostrarDiv4() {
    var escondido4 = document.getElementById('escondido4');
    var sections4 = document.querySelectorAll('.section4');
    var section5 = document.getElementById('section5');
    var botaosubir4 = document.getElementById('imagembotaoup4');

    escondido4.classList.toggle('show');
    botaosubir4.classList.toggle('up');
    section5.classList.toggle('pull');

    if (escondido4.classList.contains('show')) {
        setTimeout(function() {
            escondido3.classList.add('zindex');
        }, 1000);
    } else {
        escondido4.classList.remove('zindex');
    }

    sections4.forEach(function(section) {
        section.classList.toggle('expanded');
    });
}

// CAROSSEL

const list = document.querySelector(".list");
const item = document.querySelector(".item");
const itemWidth = item.offsetWidth + 8; // Width + gap

function handleClick(direction, carouselId) {
    const carousel = document.getElementById(carouselId);
    const list = carousel.querySelector('.list');
    const items = list.querySelectorAll('.item');
    const itemWidth = items[0].offsetWidth;
    const currentScroll = list.scrollLeft;

    if (direction === 'next') {
        list.scrollTo({
            left: currentScroll + itemWidth,
            behavior: 'smooth'
        });
    } else {
        list.scrollTo({
            left: currentScroll - itemWidth,
            behavior: 'smooth'
        });
    }
}

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
    
    
    