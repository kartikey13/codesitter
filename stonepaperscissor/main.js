
var button = document.querySelector('.btn');

const reloadpage = (e) =>{
    e.preventDefault();
    window.location.reload();

}


var random1 = Math.floor(Math.random() * 3)+1;
var firstimage = 0;
generateimage(random1, firstimage);

var random2 = Math.floor(Math.random() *3)+1;
var secondimage = 1;
generateimage(random2, secondimage);

compare(random1, random2);

button.addEventListener('click', reloadpage);


//function to generate image
function generateimage(randomnumber, imagenumber){
 if(randomnumber == 1){
     //make image link
     const imagelink = 'img/rps' + randomnumber + '.png';
     //use set attribute to set image source
     document.querySelectorAll('img')[imagenumber].setAttribute('src', imagelink)
 }

 if(randomnumber == 2){
    //make image link
    const imagelink = 'img/rps' + randomnumber + '.png';
    //use set attribute to set image source
    document.querySelectorAll('img')[imagenumber].setAttribute('src', imagelink)
}

else{
    //make image link
    const imagelink = 'img/rps' + randomnumber + '.png';
    //use set attribute to set image source
    document.querySelectorAll('img')[imagenumber].setAttribute('src', imagelink)
}
}

//function to compare images
//1= stone, 2=paper, 3=scissor


function compare(diceone, dicetwo){
    if(diceone === 1 && dicetwo === 3){
        document.querySelector('h2').innerHTML = "User 1 Wins!!";
    }

    if(diceone === 2 && dicetwo === 1){
        document.querySelector('h2').innerHTML = "User 1 Wins!!";
    }

    if(diceone === 3 && dicetwo === 2){
        document.querySelector('h2').innerHTML = "User 1 Wins!!";
    }

    if (diceone === 1 && dicetwo === 2){
        document.querySelector('h2').innerHTML = "User 2 Wins!!";
    }

    if (diceone === 2 && dicetwo === 3){
        document.querySelector('h2').innerHTML = "User 2 Wins!!";
    }

    if (diceone === 3 && dicetwo === 1){
        document.querySelector('h2').innerHTML = "User 2 Wins!!";
    }

    else if(diceone === dicetwo){
        document.querySelector('h2').innerHTML = "Game is Draw";
    }
}