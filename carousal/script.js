var span = document.getElementsByTagName('span');
var product = document.getElementsByClassName('product');
numberpages = Math.ceil(product.length/4);
var l = 0;
var moveper = 25.34;
var maxmove = 203;


//Mobile view
var mobileview = window.matchMedia("(max-width: 768px)");
if (mobileview.matches)
{
    moveper = 50.36;
    maxmove = 557.2;
}

var rightmover = ()=>{
    l = l + moveper;
    if(product == 1) {l = 0}
       for(var i of product){
           if(l > maxmove) {l = l - moveper}
           i.style.left = '-' + l + '%'
       }
}

var leftmover = ()=>{
    l = l - moveper;
    if(l <= 0) {l = 0}
       for(var i of product){
           if(numberpages > 1) 
           i.style.left = '-' + l + '%'
       }
}
span[1].onclick = ()=>{rightmover();}
span[0].onclick = ()=>{leftmover();}