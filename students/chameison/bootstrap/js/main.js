$( document ).ready(function() { 
//progress bar
    let containerA = document.getElementById("circleA");

    let circleA = new ProgressBar.Circle(containerA, {

 
        color: '#1b5385',
        strokeWidth: 8, //largura do circulo
        duration: 1400,
        from: { color: '#AAA' },
        to: { color: '#1b5385' },

        step: function(state, circle) {

            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 05);

            circle.setText(value);
        }


    });
    let containerB = document.getElementById("circleB");

    let circleB = new ProgressBar.Circle(containerB, {


        color: '#1b5385',
        strokeWidth: 8, //largura do circulo
        duration: 1600,
        from: { color: '#AAA' },
        to: { color: '#1b5385' },

        step: function(state, circle) {

            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 22);

            circle.setText(value);
        }


    });
    let containerC = document.getElementById("circleC");

    let circleC = new ProgressBar.Circle(containerC, {


        color: '#1b5385',
        strokeWidth: 8, //largura do circulo
        duration: 2000,
        from: { color: '#AAA' },
        to: { color: '#1b5385' },

        step: function(state, circle) {

            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 10);

            circle.setText(value);
        }


    });
    let containerD = document.getElementById("circleD");

    let circleD = new ProgressBar.Circle(containerD, {


        color: '#1b5385',
        strokeWidth: 8, //largura do circulo
        duration: 2200,
        from: { color: '#AAA' },
        to: { color: '#1b5385' },

        step: function(state, circle) {

            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 1000);

            circle.setText(value);
        }


    });
    

    //Iniciando o load quando o usuario chega ao elemento
    let dataAreaOffset = $('#data-area').offset();
    let stop = 0;

    $(window).scroll(function(e) {

        let scroll = $(window).scrollTop();

        if(scroll > (dataAreaOffset.top - 500) && stop == 0){
        
            circleA.animate(1.0);
            circleB.animate(1.0);
            circleC.animate(1.0);
            circleD.animate(1.0);
            
            stop = 1;
        

        }
    });

    //PARALAX
    setTimeout(function(){
        $('#data-area').parallax({imageSrc: 'img/cidadeparallax.png'});
        $('#apply-area').parallax({imageSrc: 'img/pattern.png'});

 
    }, 250);

    //filtro do portfolio

    $('.filter-btn').on('click', function() {

        let type = $(this).attr('id'); //identificar os atributos 
        let boxes = $('.project-box'); //pegando a 

        $('.main-btn').removeClass('active'); //
        $(this).addClass('active');

        
        if(type == 'dsg-btn'){
            eachBoxes('dsg', boxes);
        }else if(type == 'dev-btn') {
            eachBoxes('dev', boxes);
        }else if(type == 'seo-btn') {
            eachBoxes('seo', boxes);
        }else{
            eachBoxes('all', boxes);
        }


    });

    function eachBoxes(type, boxes) {
        if(type == 'all') {
            $(boxes).fadeIn(); //mostrar todas, fadeIn exibe todas os eventos escondindo pelo fade
        }else{
            $(boxes).each(function() { // passar por cada box e fazer uma funcao anonima
                if(!$(this).hasClass(type)){
                    $(this).fadeOut('slow');//esconder
                }else{
                    $(this).fadeIn();
                }                                                   //se nao tem a classe, e o type foi enviado,
                                                                    // se oo botao que foi clicado nao respresetna a classe dessa box, faz o fadeOut
                                                                //verificando se o tipo é ou nao a classe
            });     
        }
    }

 // scroll para as seções

 let navBtn = $('.nav-item');

 let bannerSection = $('#mainSlider');
 let aboutSection = $('#about-area');
 let servicesSection = $('.service-area');
 let skilSection = $('.skills-area');
 let portfolioSection = $('#portfolio-area');
 let contactSection = $('#contact-area');

 let scrollTo = '';

 $(navBtn).click(function() {

   let btnId = $(this).attr('id');

   if(btnId == 'about-menu') {
     scrollTo = aboutSection;
   } else if(btnId == 'services-menu') {
     scrollTo = servicesSection;
   } else if(btnId == 'skill-menu') {
     scrollTo = skilSection;
   } else if(btnId == 'portfolio-menu') {
     scrollTo = portfolioSection;
   } else if(btnId == 'contact-menu') {
     scrollTo = contactSection;
   } else {
     scrollTo = bannerSection;
   }

   $([document.documentElement, document.body]).animate({
       scrollTop: $(scrollTo).offset().top - 70
   }, 1500);
 });

});