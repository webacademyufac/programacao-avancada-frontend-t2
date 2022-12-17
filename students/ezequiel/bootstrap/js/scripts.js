console.log('Working...')   

/* Progressbar */
function circle(id, text) {

    let bar = new ProgressBar.Circle(id, {
        color: '#eee',
        strokeWidth: 15,
        duration: 500,
        from: { color: '#eee', width: 1 },
        to: { color: '#ddd', width: 4 },
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            var value = Math.round(circle.value() * text);
            circle.setText(value);

        }
    });
    bar.animate(1.0);  // Number from 0.0 to 1.0
}

$(document).ready(function () {
    /* Progressbar */
    circle('#circleA', 100)
    circle('#circleB', 200)
    circle('#circleC', 300)
    circle('#circleD', 400)

    /* parallax */
    $('#numbers-area').parallax({imageSrc: 'img/cidadeparallax.png'});
    $('#pattern-img').parallax({imageSrc: 'img/pattern.png'});
});
