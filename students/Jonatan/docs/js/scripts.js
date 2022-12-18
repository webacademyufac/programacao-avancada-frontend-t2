$(document).ready(function () {

    /* Progressbar */

    let containerA = document.getElementById('circleA');


    let circleA = new ProgressBar.Circle(containerA, {
        color: '#64DAF9',
        strokeWidth: 8,
        duration: 1400,
        from: { color: '#AAA', width: 1 },
        to: { color: '#65DAF9', width: 4 },
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            var value = Math.round(circle.value() * 6);
            circle.setText(value);
        }
    });

    let containerB = document.getElementById('circleB');


    let circleB = new ProgressBar.Circle(containerB, {
        color: '#64DAF9',
        strokeWidth: 8,
        duration: 1400,
        from: { color: '#AAA', width: 1 },
        to: { color: '#65DAF9', width: 4 },
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            var value = Math.round(circle.value() * 300);
            circle.setText(value);
        }
    });

    let containerC = document.getElementById('circleC');


    let circleC = new ProgressBar.Circle(containerC, {
        color: '#64DAF9',
        strokeWidth: 8,
        duration: 1400,
        from: { color: '#AAA', width: 1 },
        to: { color: '#65DAF9', width: 4 },
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            var value = Math.round(circle.value() * 60);
            circle.setText(value);
        }
    });

    let containerD = document.getElementById('circleD');


    let circleD = new ProgressBar.Circle(containerD, {
        color: '#64DAF9',
        strokeWidth: 8,
        duration: 1400,
        from: { color: '#AAA', width: 1 },
        to: { color: '#65DAF9', width: 4 },
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            var value = Math.round(circle.value() * 40);
            circle.setText(value);
        }
    });

    // iniciando o loader quando o usuário chega no elemento

    let dataAreaOffset = $('#numbers-area').offset();
    let stop = 0;

    $(window).scroll(function(e){
        let scroll = $(window).scrollTop();
        if(scroll > (dataAreaOffset.top - 500) && stop == 0){
            circleA.animate(1.0);
            circleB.animate(1.0);
            circleC.animate(1.0);
            circleD.animate(1.0);

            stop = 1;
        }
    })

    /* Parallax */
    setTimeout(function() {
        $('#numbers-area').parallax({imageSrc: 'img/cidadeparallax.png'});
        $('#pattern-img').parallax({imageSrc: 'img/pattern.png'});
    }, 250)

    // filtro do portfolio

    $('.filter-btn').on('click', function () {
        let type = $(this).attr('id');
        let boxes = $('.project-box');

        $('.main-btn').removeClass('active');
        $(this).addClass('active');

        if(type == 'dsg-btn') {
            eachBoxes('dsg', boxes)
        }
        else if(type == 'dev-btn'){
            eachBoxes('dev', boxes)
        }
        else if(type == 'seo-btn'){
            eachBoxes('seo', boxes)
        }
        else{
            eachBoxes('all', boxes)
        }

    });

    function eachBoxes(type, boxes) {
        if(type == 'all') {
            $(boxes).fadeIn();
        }
        else{
            $(boxes).each(function() {
                if(!$(this).hasClass(type)) {
                    $(this).fadeOut('slow');
                }else{
                    $(this).fadeIn();
                }
            })
        }
    }
    
});