$(document).ready(function () {

    /* Progressbar */

    let bar = new ProgressBar.Circle(circleA, {
        color: '#aaa',
        strokeWidth: 20,
        duration: 500,
        from: { color: '#eee', width: 1 },
        to: { color: '#ddd', width: 4 },
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            var value = Math.round(circle.value() * 256);
            circle.setText(value);
        }
    });

    bar.animate(1.0)

    bar = new ProgressBar.Circle(circleB, {
        color: '#aaa',
        strokeWidth: 20,
        duration: 500,
        from: { color: '#aaa', width: 1 },
        to: { color: '#333', width: 4 },
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            var value = Math.round(circle.value() * 47);
            circle.setText(value);
        }
    });

    bar.animate(1.0)

    bar = new ProgressBar.Circle(circleC, {
        color: '#aaa',
        strokeWidth: 20,
        duration: 500,
        from: { color: '#aaa', width: 1 },
        to: { color: '#333', width: 4 },
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            var value = Math.round(circle.value() * 1253);
            circle.setText(value);
        }
    });

    bar.animate(1.0)

    bar = new ProgressBar.Circle(circleD, {
        color: '#aaa',
        strokeWidth: 20,
        duration: 500,
        from: { color: '#aaa', width: 1 },
        to: { color: '#333', width: 4 },
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            var value = Math.round(circle.value() * 17);
            circle.setText(value);
        }
    });

    bar.animate(1.0)


    /* Parallax */
    $('#numbers-area').parallax({imageSrc: 'img/cidadeparallax.png'});
    $('#pattern-img').parallax({imageSrc: 'img/pattern.png'});
    
})