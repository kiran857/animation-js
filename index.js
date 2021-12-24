 
var run=setInterval(moveLeft,1);
margin=0;
function moveLeft(){
    if (margin==1370) {
        clearInterval(run)
    } else {
        margin+=5;
    var boxObj=document.getElementById('box');
    boxObj.style.marginRight=margin+"px";

    }
    }