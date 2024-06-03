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
    var escondido = document.getElementById('escondido');
    var sections = document.querySelectorAll('.section1');
    var section2 = document.getElementById('section2');
    var botaosubir = document.getElementById('imagembotaoup')

    // Alternar a classe 'show' no elemento escondido
    escondido.classList.toggle('show');
    section2.classList.toggle('pull');
    botaosubir.classList.toggle('up')

    // Adicionar ou remover a classe 'expanded' nas seções abaixo do elemento escondido
    sections.forEach(function(section) {
        section.classList.toggle('expanded');
    });
}

function mostrarDiv2() {
    var escondido2 = document.getElementById('escondido2');
    var sections = document.querySelectorAll('.section1');
    var section2 = document.getElementById('section2');
    var botaosubir = document.getElementById('imagembotaoup2')

    // Alternar a classe 'show' no elemento escondido
    escondido2.classList.toggle('show');
    section2.classList.toggle('pull');
    botaosubir.classList.toggle('up')

    // Adicionar ou remover a classe 'expanded' nas seções abaixo do elemento escondido
    sections.forEach(function(section) {
        section.classList.toggle('expanded');
    });
}

document.addEventListener("DOMContentLoaded", function() {
    var escondidos = document.querySelectorAll('.escondido');
    escondidos.forEach(function(escondido) {
        escondido.classList.remove('show');
    });
});

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
            if(e.target.id == "fechar")

        })
    }
