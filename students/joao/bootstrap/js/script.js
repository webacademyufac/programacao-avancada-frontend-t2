$(document).ready(function () {
  let bar = new ProgressBar.Circle(circle__a,{
    color: '#aaa',
    strokeWidth: 20,
    duration: 500,
    from: { color: '#aaa', width: 1},
    to: {color: '#aaa', width: 4},
    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color);
      let value = Math.round(circle.value() * 256);
      circle.setText(value);
    }
  });

  bar.animate(1.0);

    bar = new ProgressBar.Circle(circle__b,{
    color: '#aaa',
    strokeWidth: 20,
    duration: 500,
    from: { color: '#aaa', width: 1},
    to: {color: '#aaa', width: 4},
    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color);
      let value = Math.round(circle.value() * 50);
      circle.setText(value);
    }
  });

  bar.animate(1.0);

    bar = new ProgressBar.Circle(circle__c,{
    color: '#aaa',
    strokeWidth: 20,
    duration: 500,
    from: { color: '#aaa', width: 1},
    to: {color: '#aaa', width: 4},
    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color);
      let value = Math.round(circle.value() * 1500);
      circle.setText(value);
    }
  });
  bar.animate(1.0);

    bar = new ProgressBar.Circle(circle__d,{
    color: '#aaa',
    strokeWidth: 20,
    duration: 500,
    from: { color: '#aaa', width: 1},
    to: {color: '#aaa', width: 4},
    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color);
      let value = Math.round(circle.value() * 500);
      circle.setText(value);
    }
  });
  bar.animate(1.0);

});

$('#numbers-area').parallax({imageSrc: 'img/cidadeparallax.png'});

