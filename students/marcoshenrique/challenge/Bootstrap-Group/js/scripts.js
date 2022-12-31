$( document ).ready(function(){




let bar = new ProgressBar.Circle(circleA, {
    color: '#aaa',
    strokeWidth: 4,
    trailWidth: 1,
    duration: 500,
    from: { color: '#000', width: 1 },
    to: { color: '#0db2ac', width: 4 },
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      var value = Math.round(circle.value() * 65);
      circle.setText(value); 
    }
  });

bar.animate(1.0);


let barB = new ProgressBar.Circle(circleB, {
    color: '#aaa',
    strokeWidth: 4,
    trailWidth: 1,
    duration: 500,
    from: { color: '#000', width: 1 },
    to: { color: '#0db2ac', width: 4 },
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      var value = Math.round(circle.value() * 100);
      circle.setText(value); 
    }
  });

barB.animate(1.0);

let barC = new ProgressBar.Circle(circleC, {
    color: '#aaa',
    strokeWidth: 4,
    trailWidth: 1,
    duration: 500,
    from: { color: '#000', width: 1 },
    to: { color: '#0db2ac', width: 4 },
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      var value = Math.round(circle.value() * 60);
      circle.setText(value); 
    }
  });

barC.animate(1.0);


let barD = new ProgressBar.Circle(circleD, {
    color: '#aaa',
    strokeWidth: 4,
    trailWidth: 1,
    duration: 500,
    from: { color: '#000', width: 1 },
    to: { color: '#0db2ac', width: 4 },
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      var value = Math.round(circle.value() * 150);
      circle.setText(value); 
    }
  });

barD.animate(1.0);

/* Parallax */
$('#numbers-area').parallax({imageSrc: 'img/cidadeparallax.png'});
$('#pattern-img').parallax({imageSrc: 'img/pattern.png'});



})


