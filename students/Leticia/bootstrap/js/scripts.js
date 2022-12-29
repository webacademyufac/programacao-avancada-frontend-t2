$ ( document ).ready(function(){

    let barA = new ProgressBar.Circle(circleA, {
        color: '#aaa',
        strokeWidth: 20,
        duration: 500,
        from: { color: '#000', width: 1 },
        to: { color: '#ddd', width: 4 },
        // Set default step function for all animate calls
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            var value = Math.round(circle.value() * 256);
            circle.setText(value);
            
        }
    
    });
   
    barA.animate(1.0); 

    let barB = new ProgressBar.Circle(circleB, {
        color: '#aaa',
        strokeWidth: 20,
        duration: 500,
        from: { color: '#aaa', width: 1 },
        to: { color: '#333', width: 4 },
        // Set default step function for all animate calls
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            var value = Math.round(circle.value() * 256);
            circle.setText(value);
            
        }
    
    });
   
    barB.animate(1.0); 

    let barC = new ProgressBar.Circle(circleC, {
        color: '#aaa',
        strokeWidth: 20,
        duration: 500,
        from: { color: '#aaa', width: 1 },
        to: { color: '#333', width: 4 },
        // Set default step function for all animate calls
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            var value = Math.round(circle.value() * 256);
            circle.setText(value);
            
        }
    
    });
   
    barC.animate(1.0); 

    let barD = new ProgressBar.Circle(circleD, {
        color: '#aaa',
        strokeWidth: 20,
        duration: 500,
        from: { color: '#aaa', width: 1 },
        to: { color: '#333', width: 4 },
        // Set default step function for all animate calls
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            var value = Math.round(circle.value() * 256);
            circle.setText(value);
            
        }
    
    });
   
    barD.animate(1.0); 

    // parallax 

    $('#numbers-area').parallax({imageSrc: 'img/cidadeparallax.png'});
    $('#pattern-img').parallax({imageSrc: 'img/pattern.png'});

})