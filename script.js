function HoverButton(){
    document.getElementById("hover").style.backgroundColor="#080";
}
function Hover(){
    document.getElementById("hover").style.backgroundColor="#7cfc00";
}


function Visible(){
    document.getElementById("click").style.visibility="visible";
}
function Hide(){
    document.getElementById("click").style.visibility="hidden";
}


function HoverPic(){
    document.getElementById("koko").style.opacity=1;
}
function HoverPicOff(){
    document.getElementById("koko").style.opacity=0.5;
}

function HoverPic2(){
    document.getElementById("pic2").style.opacity=1;
}
function HoverPicOff2(){
    document.getElementById("pic2").style.opacity=0.5;
}

function HoverPic3(){
    document.getElementById("pic3").style.opacity=1;
}
function HoverPicOff3(){
    document.getElementById("pic3").style.opacity=0.5;
}




function colortext(){
    document.getElementById("clicks").style.color="green";
    document.getElementById("clicks").style.textDecoration="underline";
}
function colortext1(){
    document.getElementById("clicks1").style.color="green";
    document.getElementById("clicks1").style.textDecoration="underline";
}
function colortext2(){
    document.getElementById("clicks2").style.color="green";
    document.getElementById("clicks2").style.textDecoration="underline";
}
function colortext3(){
    document.getElementById("clicks3").style.color="green";
    document.getElementById("clicks3").style.textDecoration="underline";
}





function valid(){
   var t = prompt("Name");
   if(t == "Hana"){
       window.location ="index.html";
   }
   else {
       alert("wrong name");
   }
}