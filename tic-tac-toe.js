var counter=-1;
function cross(){
    counter=0;
    if(document.getElementById('btn1').innerText=='X' && document.getElementById('btn2').innerText=='X' && document.getElementById('btn3').innerText=='X' || document.getElementById('btn4').innerText=='X' && document.getElementById('btn5').innerText=='X' && document.getElementById('btn6').innerText=='X' || document.getElementById('btn7').innerText=='X' && document.getElementById('btn8').innerText=='X' && document.getElementById('btn9').innerText=='X' || document.getElementById('btn1').innerText=='X' && document.getElementById('btn4').innerText=='X' && document.getElementById('btn7').innerText=='X' || document.getElementById('btn2').innerText=='X' && document.getElementById('btn5').innerText=='X' && document.getElementById('btn8').innerText=='X' || document.getElementById('btn3').innerText=='X' && document.getElementById('btn6').innerText=='X' && document.getElementById('btn9').innerText=='X' || document.getElementById('btn1').innerText=='X' && document.getElementById('btn5').innerText=='X' && document.getElementById('btn9').innerText=='X' || document.getElementById('btn3').innerText=='X' && document.getElementById('btn5').innerText=='X' && document.getElementById('btn7').innerText=='X'){
        document.getElementById('i1').value= 'GAME OVER!!!!!';
        document.getElementById('i2').value= 'PLAYER X WON';
        counter=2;
        exit;
    }
    else if(document.getElementById('btn1').innerText=='O' && document.getElementById('btn2').innerText=='O' && document.getElementById('btn3').innerText=='O' || document.getElementById('btn4').innerText=='O' && document.getElementById('btn5').innerText=='O' && document.getElementById('btn6').innerText=='O' || document.getElementById('btn7').innerText=='O' && document.getElementById('btn8').innerText=='O' && document.getElementById('btn9').innerText=='O' || document.getElementById('btn1').innerText=='O' && document.getElementById('btn4').innerText=='O' && document.getElementById('btn7').innerText=='O' || document.getElementById('btn2').innerText=='O' && document.getElementById('btn5').innerText=='O' && document.getElementById('btn8').innerText=='O' || document.getElementById('btn3').innerText=='O' && document.getElementById('btn6').innerText=='O' && document.getElementById('btn9').innerText=='O' || document.getElementById('btn1').innerText=='O' && document.getElementById('btn5').innerText=='O' && document.getElementById('btn9').innerText=='O' || document.getElementById('btn3').innerText=='O' && document.getElementById('btn5').innerText=='O' && document.getElementById('btn7').innerText=='O'){
        document.getElementById('i1').value= 'GAME OVER!!!!!';
        document.getElementById('i2').value= 'PLAYER O WON';
        counter=2;
        exit;
    }
    else if((document.getElementById('btn1').innerText=='O' || document.getElementById('btn1').innerText=='X') && (document.getElementById('btn2').innerText=='O' || document.getElementById('btn2').innerText=='X') && (document.getElementById('btn3').innerText=='O' || document.getElementById('btn3').innerText=='X') && (document.getElementById('btn4').innerText=='O' || document.getElementById('btn4').innerText=='X') && (document.getElementById('btn5').innerText=='O' || document.getElementById('btn5').innerText=='X') && (document.getElementById('btn6').innerText=='O' || document.getElementById('btn6').innerText=='X') && (document.getElementById('btn7').innerText=='O' || document.getElementById('btn7').innerText=='X') && (document.getElementById('btn8').innerText=='O' || document.getElementById('btn8').innerText=='X') && (document.getElementById('btn9').innerText=='O' || document.getElementById('btn9').innerText=='X')){
        document.getElementById('i1').value= 'GAME OVER!!!!!';
        document.getElementById('i2').value= 'ITS A TIE!!!!';
        counter=2;
        exit;   
    }
    else if(counter==0){
        document.getElementById('i1').value= 'PLAYER X TURN';
        document.getElementById('i2').value= 'NOW CLICK';
    }
}
function zero(){
    if(document.getElementById('btn1').innerText=='X' && document.getElementById('btn2').innerText=='X' && document.getElementById('btn3').innerText=='X' || document.getElementById('btn4').innerText=='X' && document.getElementById('btn5').innerText=='X' && document.getElementById('btn6').innerText=='X' || document.getElementById('btn7').innerText=='X' && document.getElementById('btn8').innerText=='X' && document.getElementById('btn9').innerText=='X' || document.getElementById('btn1').innerText=='X' && document.getElementById('btn4').innerText=='X' && document.getElementById('btn7').innerText=='X' || document.getElementById('btn2').innerText=='X' && document.getElementById('btn5').innerText=='X' && document.getElementById('btn8').innerText=='X' || document.getElementById('btn3').innerText=='X' && document.getElementById('btn6').innerText=='X' && document.getElementById('btn9').innerText=='X' || document.getElementById('btn1').innerText=='X' && document.getElementById('btn5').innerText=='X' && document.getElementById('btn9').innerText=='X' || document.getElementById('btn3').innerText=='X' && document.getElementById('btn5').innerText=='X' && document.getElementById('btn7').innerText=='X'){
        document.getElementById('i1').value= 'GAME OVER!!!!!';
        document.getElementById('i2').value= 'PLAYER X WON';
        counter=2;
        exit;
    }
    else if(document.getElementById('btn1').innerText=='O' && document.getElementById('btn2').innerText=='O' && document.getElementById('btn3').innerText=='O' || document.getElementById('btn4').innerText=='O' && document.getElementById('btn5').innerText=='O' && document.getElementById('btn6').innerText=='O' || document.getElementById('btn7').innerText=='O' && document.getElementById('btn8').innerText=='O' && document.getElementById('btn9').innerText=='O' || document.getElementById('btn1').innerText=='O' && document.getElementById('btn4').innerText=='O' && document.getElementById('btn7').innerText=='O' || document.getElementById('btn2').innerText=='O' && document.getElementById('btn5').innerText=='O' && document.getElementById('btn8').innerText=='O' || document.getElementById('btn3').innerText=='O' && document.getElementById('btn6').innerText=='O' && document.getElementById('btn9').innerText=='O' || document.getElementById('btn1').innerText=='O' && document.getElementById('btn5').innerText=='O' && document.getElementById('btn9').innerText=='O' || document.getElementById('btn3').innerText=='O' && document.getElementById('btn5').innerText=='O' && document.getElementById('btn7').innerText=='O'){
        document.getElementById('i1').value= 'GAME OVER!!!!!';
        document.getElementById('i2').value= 'PLAYER O WON';
        counter=2;
        exit;
    }
    else if((document.getElementById('btn1').innerText=='O' || document.getElementById('btn1').innerText=='X') && (document.getElementById('btn2').innerText=='O' || document.getElementById('btn2').innerText=='X') && (document.getElementById('btn3').innerText=='O' || document.getElementById('btn3').innerText=='X') && (document.getElementById('btn4').innerText=='O' || document.getElementById('btn4').innerText=='X') && (document.getElementById('btn5').innerText=='O' || document.getElementById('btn5').innerText=='X') && (document.getElementById('btn6').innerText=='O' || document.getElementById('btn6').innerText=='X') && (document.getElementById('btn7').innerText=='O' || document.getElementById('btn7').innerText=='X') && (document.getElementById('btn8').innerText=='O' || document.getElementById('btn8').innerText=='X') && (document.getElementById('btn9').innerText=='O' || document.getElementById('btn9').innerText=='X')){
        document.getElementById('i1').value= 'GAME OVER!!!!!';
        document.getElementById('i2').value= 'ITS A TIE!!!!';
        counter=2;
        exit;   
    }
    else if(counter==1){
        document.getElementById('i1').value= 'PLAYER O TURN';
        document.getElementById('i2').value= 'NOW CLICK';
    }
}
function input(str1){
    if(counter==2){exit;}
    else if(counter==0){
        document.getElementById(str1).innerHTML= 'X';
        counter=1;
         zero();
    }
    else if(counter==1){
        document.getElementById(str1).innerHTML= 'O';
        counter=0;
        cross();
    }
}
function reset(){
    document.getElementById('i1').value= "";
    document.getElementById('i2').value= "";
    document.getElementById('btn1').innerHTML= "";
    document.getElementById('btn2').innerHTML= "";
    document.getElementById('btn3').innerHTML= "";
    document.getElementById('btn4').innerHTML= "";
    document.getElementById('btn5').innerHTML= "";
    document.getElementById('btn6').innerHTML= "";
    document.getElementById('btn7').innerHTML= "";
    document.getElementById('btn8').innerHTML= "";
    document.getElementById('btn9').innerHTML= "";
}
