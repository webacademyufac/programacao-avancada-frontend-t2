$( document ).ready(function(){
    // progressbar
const barA = new ProgressBar.Circle(circleA, {
    color: '#aaa',
    strokeWidth: 20,
    duration: 500,
    from: { color: '#eee', width: 1 },
    to: { color: '#ddd', width: 4 },
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
    //   circle.path.setAttribute('stroke-width', state.width);
  
      var value = Math.round(circle.value() * 256);
        circle.setText(value);
    }
  });
  barA.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  barA.text.style.fontSize = '2rem';

  const barB = new ProgressBar.Circle(circleB, {
    color: '#aaa',
    strokeWidth: 20,
    duration: 500,
    from: { color: '#aaa', width: 1 },
    to: { color: '#333', width: 4 },
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
    //   circle.path.setAttribute('stroke-width', state.width);
  
      var value = Math.round(circle.value() * 60);
        circle.setText(value);
    }
  });
  barB.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  barB.text.style.fontSize = '2rem';

  const barC = new ProgressBar.Circle(circleC, {
    color: '#aaa',
    strokeWidth: 20,
    duration: 500,
    from: { color: '#aaa', width: 1 },
    to: { color: '#333', width: 4 },
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
    //   circle.path.setAttribute('stroke-width', state.width);
  
      var value = Math.round(circle.value() * 60);
        circle.setText(value);
    }
  });
  barC.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  barC.text.style.fontSize = '2rem';

  const barD = new ProgressBar.Circle(circleD, {
    color: '#aaa',
    strokeWidth: 20,
    duration: 500,
    from: { color: '#aaa', width: 1 },
    to: { color: '#333', width: 4 },
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
    //   circle.path.setAttribute('stroke-width', state.width);
  
      var value = Math.round(circle.value() * 17);
        circle.setText(value);
    }
  });
  barD.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  barD.text.style.fontSize = '2rem';
  barA.animate(1.0);  // Number from 0.0 to 1.0
  barB.animate(1.0);  // Number from 0.0 to 1.0
  barC.animate(1.0);  // Number from 0.0 to 1.0
  barD.animate(1.0);  // Number from 0.0 to 1.0

//   Parallax
$('#numbers-area').parallax({imageSrc: 'img/cidadeparallax.png'});
$('#pattern-img').parallax({imageSrc: 'img/pattern.png'});
});
