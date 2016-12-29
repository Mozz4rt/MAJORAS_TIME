function DawnOfANewDay() {
  var audio = new Audio('Dawn-of-a-new-day.mp3');
  // setTimeout para dar delay de inicio e ficar de acordo com o original
  // que no qual só toca quando o título principal aparece, com milésimos
  // de segundos de antecedência (no original)
  setTimeout(function(){
    audio.play();
  },800)
}

//fadeIn para esmaecer entrada dos textos, on qual pega em seu estilo (css)
//para invocar o método de preenchimento de opacidade, pela sua referência,
//um por vez, de Id
function fadeIn(id, delay){
  var elem = document.getElementById(id);
  setTimeout(function(){
    elem.style.opacity = 1;
  },delay*1000)
}
//utiliza da função fadeIn criada com os devidos parâmetros
// Obs.: Não pode deixar um parâmetro nulo!!! Todos tem que ser usados.
// Obs.: pode sim, mas fica muito feio
window.onload = function(){
  var top='delayedUpperTitle';
  var middle='delayedMainTitle';
  var bottom='delayedDownerTitle';
  var day;
  // usar o DRY (Don't Repeat Yourself)
    document.getElementById(top).innerHTML='Dawn of';

      if(dayNumber()==1){
        day='First';
        document.getElementById(middle).innerHTML='The '+day+' Day';
      }else if(dayNumber()==2){
        day='Second';
        document.getElementById(middle).innerHTML='The '+day+' Day';
      }else if(dayNumber()==3){
        day='Third';
        document.getElementById(middle).innerHTML='The '+day+' Day';
      }else{
        day=dayNumber();
        document.getElementById(middle).innerHTML='The '+day+'th Day';
      }

    document.getElementById(bottom).innerHTML='-24 Hours Remain-';
  fadeIn(top,1);
  fadeIn(middle,2);
  fadeIn(bottom,3);
}

// pegando o número do dia

function dayNumber(){
  var now = new Date();
  var start = new Date(now.getFullYear(), 0, 0);
  var diff = now - start;
  var oneDay = 1000 * 60 * 60 * 24;
  var day = Math.floor(diff / oneDay);
  // pode ser usado o Math.ceil tbm, mas não vejo certa necessidade
  return day;
}
