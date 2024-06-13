function menuShow(){
    let menumobile = document.querySelector('.menumobile')
    if (menumobile.classList.contains('open')){
        menumobile.classList.remove('open');
    } else {
        menumobile.classList.add('open');
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
    var escondido2pull = document.getElementById('escondido2')
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
// CAROSSEL

const list = document.querySelector(".list");
const item = document.querySelector(".item");
const itemWidth = item.offsetWidth + 8; // Width + gap

function handleClick(direction) {
    if (direction === "previous") {
        list.scrollBy({ left: -itemWidth, behavior: "smooth" });
    } else {
        list.scrollBy({ left: itemWidth, behavior: "smooth" });
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

    // Váriaveis carousel
    var carousel = document.getElementById ("carousel");

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
        if (porcentagemRolagem > 35) { 
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
        // Rolagem carousel 3
        if (porcentagemRolagem > 45){
            carousel.classList.add("show");
        } else {
            carousel.classList.remove("show");
        }

        // Rolagem section 3
        if (porcentagemRolagem > 78){
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
            if(e.target.id == "fecharObrigado" || e.target.id == 'janelacontato')
                obrigado.classList.remove('abrir')
        })
    }
    