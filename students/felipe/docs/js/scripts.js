$(document).ready(function(){
    // progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

let barA = new ProgressBar.Circle(circleA, {
    color: '#aaa',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 4,
    trailWidth: 1,
    duration: 1400,
    from: { color: '#eee', width: 1 },
    to: { color: '#ddd', width: 4 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
  
      let value = Math.round(circle.value() * 100);
      circle.setText(value);
  
    }
  });

  let barB = new ProgressBar.Circle(circleB, {
    color: '#aaa',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 4,
    trailWidth: 1,
    duration: 1400,
    from: { color: '#eee', width: 1 },
    to: { color: '#ddd', width: 4 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
  
      let value = Math.round(circle.value() * 100);
      circle.setText(value);
  
    }
  });

  let barC = new ProgressBar.Circle(circleC, {
    color: '#aaa',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 4,
    trailWidth: 1,
    duration: 1400,
    from: { color: '#eee', width: 1 },
    to: { color: '#ddd', width: 4 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
  
      let value = Math.round(circle.value() * 100);
      circle.setText(value);
  
    }
  });

  let barD = new ProgressBar.Circle(circleD, {
    color: '#aaa',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 4,
    trailWidth: 1,
    duration: 1400,
    from: { color: '#eee', width: 1 },
    to: { color: '#ddd', width: 4 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
  
      let value = Math.round(circle.value() * 100);
      circle.setText(value);
  
    }
  });
  
  
  barA.animate(1.0);  // Number from 0.0 to 1.0
  barB.animate(1.0);
  barC.animate(1.0);  // Number from 0.0 to 1.0
  barD.animate(1.0);

//   parallax
$('#numbers-area').parallax({imageSrc: './img/cidadeparallax.png'});
$('#pattern-img').parallax({imageSrc: './img/pattern.png'});

})