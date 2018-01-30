$(function() {
  var rojo = $('#red').attr('value');
  var verde = $('#green').attr('value');
  var azul = $('#blue').attr('value');

  $("#red").knob({
    'min':0,
    'max':255,
    'release' : function (v) {
    $('#red').attr('value' , v);
    rojo = $('#red').attr('value');
    $('.square').css({"background-color":"rgb("+rojo+", "+verde+", "+azul+")"});
    }
  });

  $("#green").knob({
    'min':0,
    'max':255,
    'release' : function (v) {
    $('#green').attr('value' , v);
    verde = $('#green').attr('value');
    $('.square').css({"background-color":"rgb("+rojo+", "+verde+", "+azul+")"});
    }
  });

  $("#blue").knob({
    'min':0,
    'max':255,
    'release' : function (v) {
    $('#blue').attr('value' , v);
    azul = $('#blue').attr('value');
    $('.square').css({"background-color":"rgb("+rojo+", "+verde+", "+azul+")"});
    }
  });
});
