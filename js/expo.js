var main = document.querySelector('main');
var redside1 = document.querySelector('#red_big_3');
var redside2 = document.querySelector('#red_big_2');
var redside3 = document.querySelector('#red_big_1');
var bluetop1 = document.querySelector('#blue_top_1');
var bluetop2 = document.querySelector('#blue_top_2');
var bluetop3 = document.querySelector('#blue_top_3');
var bluetop4 = document.querySelector('#blue_small_1');
var bluetop5 = document.querySelector('#blue_small_2');
var bluetop6 = document.querySelector('#x_blue_1');
var bluetop7 = document.querySelector('#x_blue_2');
var bluetop8 = document.querySelector('#x_blue_3');
var bluetop9 = document.querySelector('#p_blue_1');
var bluetop10 = document.querySelector('#p_blue_2');
var bluetop11 = document.querySelector('#p_blue_3');
var bluetop12 = document.querySelector('#o_blue_1');
var bluetop13 = document.querySelector('#o_blue_2');
var bluetop14 = document.querySelector('#o_blue_3');
var bar1 = document.querySelector('section.E #brown_bar_1');
var bar2 = document.querySelector('section.E #brown_bar_2');
var bar3 = document.querySelector('section.E #brown_bar_3');
var bar4 = document.querySelector('section.E #brown_bar_4');
var bar5 = document.querySelector('section.E #brown_bar_5');
var bar6 = document.querySelector('section.E #brown_bar_6');
var bar7 = document.querySelector('section.E #brown_bar_7');
var bar8 = document.querySelector('section.E #brown_bar_8');
var bar9 = document.querySelector('section.E #brown_bar_9');
var bar10 = document.querySelector('section.E #brown_bar_10');
var bar11 = document.querySelector('section.E #brown_bar_11');
var bar12 = document.querySelector('section.E #brown_bar_12');
var orange1 = document.querySelector('section.E #orange_front_2');
var orange2 = document.querySelector('section.E #orange_front_1');
var xfront1 = document.querySelector('section.X #x_orange_front_1');
var xfront2 = document.querySelector('section.X #x_orange_front_2');
var xback1 = document.querySelector('section.X #x_brown_1');
var xback2 = document.querySelector('section.X #x_brown_2');
var pfront = document.querySelector('section.P #p_front');
var pback = document.querySelector('section.P #p_back');
var oinside = document.querySelector('section.O #o_inside');
var oback1 = document.querySelector('section.O #o_dark_bg');
var oback2 = document.querySelector('section.O #o_orange_bg');
var dive = document.querySelector('.e');
var divx = document.querySelector('.x');
var divp = document.querySelector('.p');
var divo = document.querySelector('.o');
var divekey = document.querySelector('section.E .keypress');
var divxkey = document.querySelector('section.X .keypress');
var divpkey = document.querySelector('section.P .keypress');
var divokey = document.querySelector('section.O .keypress');
var pressed = [];
var expo = 'expo';

document.addEventListener('keydown',
  function(e) {
    if(e.keyCode === 79) {
      divokey.classList.add('press');
      divo.classList.toggle('o');
}
})

document.addEventListener('keyup',
  function(e) {
    if(e.keyCode === 79) {
      divokey.classList.remove('press');
}
})

document.addEventListener('keydown',
  function(e) {
    if(e.keyCode === 80) {
      divpkey.classList.add('press');
      divp.classList.toggle('p');
}
})

document.addEventListener('keyup',
  function(e) {
    if(e.keyCode === 80) {
      divpkey.classList.remove('press');
}
})

document.addEventListener('keydown',
  function(e) {
    if(e.keyCode === 88) {
      divxkey.classList.add('press');
      divx.classList.toggle('x');
}
})

document.addEventListener('keyup',
  function(e) {
    if(e.keyCode === 88) {
      divxkey.classList.remove('press');
}
})

document.addEventListener('keydown',
  function(e) {
    if(e.keyCode === 69) {
      divekey.classList.add('press');
      dive.classList.toggle('e');
}
})

document.addEventListener('keyup',
  function(e) {
    if(e.keyCode === 69) {
      divekey.classList.remove('press');
}
})

document.addEventListener('keyup',
  (e) => {
    pressed.push(e.key);
    pressed.splice(-expo.length - 1, pressed.length - expo.length);
    if(pressed.join('').includes(expo)) {
      redside1.classList.toggle('red_big_3_transform');
      redside2.classList.toggle('red_big_2_transform');
      redside3.classList.toggle('red_big_1_transform');
      bluetop1.classList.toggle('blue_top_1_transform');
      bluetop2.classList.toggle('blue_top_2_transform');
      bluetop3.classList.toggle('blue_top_3_transform');
      bluetop4.classList.toggle('blue_top_4_transform');
      bluetop5.classList.toggle('blue_top_5_transform');
      bluetop6.classList.toggle('blue_top_6_transform');
      bluetop7.classList.toggle('blue_top_7_transform');
      bluetop8.classList.toggle('blue_top_8_transform');
      bluetop9.classList.toggle('blue_top_9_transform');
      bluetop10.classList.toggle('blue_top_10_transform');
      bluetop11.classList.toggle('blue_top_11_transform');
      bluetop12.classList.toggle('blue_top_12_transform');
      bluetop13.classList.toggle('blue_top_13_transform');
      bluetop14.classList.toggle('blue_top_14_transform');
      bar1.classList.toggle('bar_1_transform');
      bar2.classList.toggle('bar_2_transform');
      bar3.classList.toggle('bar_3_transform');
      bar4.classList.toggle('bar_4_transform');
      bar5.classList.toggle('bar_5_transform');
      bar6.classList.toggle('bar_6_transform');
      bar7.classList.toggle('bar_7_transform');
      bar8.classList.toggle('bar_8_transform');
      bar9.classList.toggle('bar_9_transform');
      bar10.classList.toggle('bar_10_transform');
      bar11.classList.toggle('bar_11_transform');
      bar12.classList.toggle('bar_12_transform');
      xfront1.classList.toggle('x_front_1_transform');
      xfront2.classList.toggle('x_front_2_transform');
      xback1.classList.toggle('x_brown_1_transform');
      xback2.classList.toggle('x_brown_2_transform');
      orange1.classList.toggle('orange_front_2_transform');
      orange2.classList.toggle('orange_front_1_transform');
      oinside.classList.toggle('o_inside_transform');
      oback1.classList.toggle('o_dark_bg_transform');
      oback2.classList.toggle('o_orange_bg_transform');
      pfront.classList.toggle('p_front_transform');
      pback.classList.toggle('p_back_transform');
    }
  }
)

oback1.addEventListener('click', function() {
  oback1.classList.toggle('o_dark_bg_transform');
  oback2.classList.toggle('o_orange_bg_transform');
})

oback2.addEventListener('click', function() {
  oback1.classList.toggle('o_dark_bg_transform');
  oback2.classList.toggle('o_orange_bg_transform');
})

pback.addEventListener('click', function() {
  pback.classList.toggle('p_back_transform');
})

redside1.addEventListener('click', function() {
  redside1.classList.toggle('red_big_3_transform');
})

redside2.addEventListener('click', function() {
  redside2.classList.toggle('red_big_2_transform');
})

redside3.addEventListener('click', function() {
  redside3.classList.toggle('red_big_1_transform');
})

bluetop1.addEventListener('click', function() {
  bluetop1.classList.toggle('blue_top_1_transform');
})

bluetop2.addEventListener('click', function() {
  bluetop2.classList.toggle('blue_top_2_transform');
})

bluetop3.addEventListener('click', function() {
  bluetop3.classList.toggle('blue_top_3_transform');
})

bluetop4.addEventListener('click', function() {
  bluetop4.classList.toggle('blue_top_4_transform');
})

bluetop5.addEventListener('click', function() {
  bluetop5.classList.toggle('blue_top_5_transform');
})

bluetop6.addEventListener('click', function() {
  bluetop6.classList.toggle('blue_top_6_transform');
})

bluetop7.addEventListener('click', function() {
  bluetop7.classList.toggle('blue_top_7_transform');
})

bluetop8.addEventListener('click', function() {
  bluetop8.classList.toggle('blue_top_8_transform');
})

bluetop9.addEventListener('click', function() {
  bluetop9.classList.toggle('blue_top_9_transform');
})

bluetop10.addEventListener('click', function() {
  bluetop10.classList.toggle('blue_top_10_transform');
})

bluetop11.addEventListener('click', function() {
  bluetop11.classList.toggle('blue_top_11_transform');
})

bluetop12.addEventListener('click', function() {
  bluetop12.classList.toggle('blue_top_12_transform');
})

bluetop13.addEventListener('click', function() {
  bluetop13.classList.toggle('blue_top_13_transform');
})

bluetop14.addEventListener('click', function() {
  bluetop14.classList.toggle('blue_top_14_transform');
})

bar1.addEventListener('click', function() {
  bar1.classList.toggle('bar_1_transform');
})

bar2.addEventListener('click', function() {
  bar2.classList.toggle('bar_2_transform');
})

bar3.addEventListener('click', function() {
  bar3.classList.toggle('bar_3_transform');
})

bar4.addEventListener('click', function() {
  bar4.classList.toggle('bar_4_transform');
})

bar5.addEventListener('click', function() {
  bar5.classList.toggle('bar_5_transform');
})

bar6.addEventListener('click', function() {
  bar6.classList.toggle('bar_6_transform');
})

bar7.addEventListener('click', function() {
  bar7.classList.toggle('bar_7_transform');
})

bar8.addEventListener('click', function() {
  bar8.classList.toggle('bar_8_transform');
})

bar9.addEventListener('click', function() {
  bar9.classList.toggle('bar_9_transform');
})

bar10.addEventListener('click', function() {
  bar10.classList.toggle('bar_10_transform');
})

bar11.addEventListener('click', function() {
  bar11.classList.toggle('bar_11_transform');
})

bar12.addEventListener('click', function() {
  bar12.classList.toggle('bar_12_transform');
})

pfront.addEventListener('click', function() {
  pfront.classList.toggle('p_front_transform');
})

xfront1.addEventListener('click', function() {
  xfront1.classList.toggle('x_front_1_transform');
})

xfront2.addEventListener('click', function() {
  xfront2.classList.toggle('x_front_2_transform');
})

orange1.addEventListener('click', function() {
  orange1.classList.toggle('orange_front_2_transform');
})

orange2.addEventListener('click', function() {
  orange2.classList.toggle('orange_front_1_transform');
})

xback1.addEventListener('click', function() {
  xback1.classList.toggle('x_brown_1_transform');
})

xback2.addEventListener('click', function() {
  xback2.classList.toggle('x_brown_2_transform');
})

oinside.addEventListener('click', function() {
  oinside.classList.toggle('o_inside_transform');
})
