$(document).ready(function () {
    // progressbar.js@1.0.0 version is used
    // Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

    const barA = new ProgressBar.Circle(circleA, {
        color: '#347fc3',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        duration: 1400,
        from: { color: '#aaa', width: 1 },
        to: { color: '#347fc3', width: 4 },
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 256);
             circle.setText(value);

        }
    });
    barA.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    barA.text.style.fontSize = '2rem';

    barA.animate(1.0);  // Number from 0.0 to 1.0
    const barB = new ProgressBar.Circle(circleB, {
        color: '#347fc3',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        duration: 1400,
        from: { color: '#aaa', width: 1 },
        to: { color: '#347fc3', width: 4 },
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
             circle.setText(value);

        }
    });
    barB.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    barB.text.style.fontSize = '2rem';

    barB.animate(1.0);  // Number from 0.0 to 1.0
    const barC = new ProgressBar.Circle(circleC, {
        color: '#347fc3',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        duration: 1400,
        from: { color: '#aaa', width: 1 },
        to: { color: '#347fc3', width: 4 },
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
             circle.setText(value);

        }
    });
    barC.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    barC.text.style.fontSize = '2rem';

    barC.animate(1.0);  // Number from 0.0 to 1.0
    const barD = new ProgressBar.Circle(circleD, {
        color: '#347fc3',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        duration: 1400,
        from: { color: '#aaa', width: 1 },
        to: { color: '#347fc3', width: 4 },
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 17);
             circle.setText(value);

        }
    });
    barD.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    barD.text.style.fontSize = '2rem';

    barD.animate(1.0);  // Number from 0.0 to 1.0

    // parallax
    $('#numbers-area').parallax({imageSrc: '/img/cidadeparallax.png'});
    $('#pattern-img').parallax({imageSrc: '/img/pattern.png'});

})