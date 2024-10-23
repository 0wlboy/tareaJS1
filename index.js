var numero1=3;
var numero2=9;
var operador='/';

switch (operador){
  case '+':
    console.log(numero1 + numero2);
  break;
  case '-':
    console.log(numero1 - numero2);
  break;
  case '*':
    console.log(numero1 * numero2);
  break;
  case '/':
    console.log(numero1 / numero2);
  break;
  default:
    console.log('por favor pon un operador valido')
  break;
}

var dia = 1;
switch (dia){
  case 1:
    console.log('es lunes');
  break;
  case 2:
    console.log('es martes');
  break;
  case 3:
    console.log('es miercoles');
  break;
  case 4:
    console.log('es jueves');
  break;
  case 5:
    console.log('es viernes');
  break;
  case 6:
    console.log('es sabado');
  break;
  case 7:
    console.log('es domingo');
  break;
  default:
    console.log('pon un numero de entre 1 y 7, por favor');
  break;
}