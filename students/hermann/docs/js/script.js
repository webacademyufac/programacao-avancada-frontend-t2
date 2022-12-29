$(document).ready(function () {
    
    // ProgressBar
    // progressbar.js@1.0.0 version is used
    // Docs: http://progressbarjs.readthedocs.org/en/1.0.0/
    let bar = new ProgressBar.Circle(circleA, {
        color: '#aaa',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        // text: {
        //     autoStyleContainer: false
        // },
        from: { color: '#ddd', width: 1 },
        to: { color: '#eee', width: 4 },
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
                circle.setText(value);
        }
    });

    bar .animate(1.0);  // Number from 0.0 to 1.0

    bar = new ProgressBar.Circle(circleB, {
        color: '#aaa',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        // text: {
        //     autoStyleContainer: false
        // },
        from: { color: '#aaa', width: 1 },
        to: { color: '#333', width: 4 },
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
                circle.setText(value);
        }
    });

    bar.animate(1.0);  // Number from 0.0 to 1.0


    bar = new ProgressBar.Circle(circleC, {
        color: '#aaa',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        // text: {
        //     autoStyleContainer: false
        // },
        from: { color: '#aaa', width: 1 },
        to: { color: '#333', width: 4 },
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
                circle.setText(value);
        }
    });

    bar.animate(1.0);  // Number from 0.0 to 1.0


    bar = new ProgressBar.Circle(circleD, {
        color: '#aaa',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        // text: {
        //     autoStyleContainer: false
        // },
        from: { color: '#aaa', width: 1 },
        to: { color: '#333', width: 4 },
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
                circle.setText(value);
        }
    });

    
    bar.animate(1.0);  // Number from 0.0 to 1.0

    bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    bar.text.style.fontSize = '2rem';

    // Parallax
    $('#numbers-area').parallax({imageSrc: 'img/cidadeparallax.png'});
    $('#pattern-img').parallax({imageSrc: 'img/pattern.png'});

})