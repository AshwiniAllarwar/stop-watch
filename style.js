const hour=document.querySelector("#h")
const min=document.querySelector("#m")
const sec=document.querySelector("#s")

var x;
var y;
var z;
var a = 0;
function updateSeconds(){
    if( a == 59){
        a = 0;
        b= '00';
    } else {
        
        a = a + 1;
        b = a;
        if(a<=9){
           var b = "0" + a;
        }
    }
    sec.innerHTML = b;
}


var c = 0;
function updateMin(){
    if( c == 59){
        c = 0;
        d=c;
    } else {
        
        c = c + 1;
        d = c;
        if(c<=9){
           var d = "0" + c;
        }
    }
   min.innerHTML = d+":";
}

var e = 0;
function updatehour(){
    if( e == 59){
        e = 0;
        d=e;
    } else {
        
        e = e + 1;
        f = e;
        if(e<=9){
           var f = "0" + e;
        }
    }
   hour.innerHTML = f+":";
}



function updatetime(){
    x = setInterval(updateSeconds,1000)
    y = setInterval(updateMin,60000-1)
    z = setInterval(updatehour,3600000 -1)
}

document.querySelector("#start").addEventListener('click',updatetime);

function myStopFunction() {
    clearInterval(x);
    clearInterval(y);
    clearInterval(z);
    sec.innerHTML = "00";
    min.innerHTML = "00:";
    hour.innerHTML = "00:";
  }
  document.querySelector("#END").addEventListener('click',myStopFunction);