var array = Array();
var array_a = Array();
var pal = Array();
var i = 0;


function inputarray(){
    document.getElementById('datastore').innerHTML = "Array : ";
    array[i] = document.getElementById('input').value;
    i++;
    document.getElementById('input').value = "";
    document.getElementById('datastore').innerHTML += array;
}

function destroyerarray(){
    document.getElementById('datastore_a').innerHTML = "Array : ";
    array_a[i] = document.getElementById('input_a').value;
    i++;
    document.getElementById('input_a').value = "";
    document.getElementById('datastore_a').innerHTML += array_a;
}

function palindromestr(){
    pal = document.getElementById('inp').value;
    document.getElementById('inp').value = "";
    document.getElementById('palinstr').innerHTML = "The String : "+pal;
}

//spinal function
function spinal(num)
{
    input = num;
    
    //setup
    var multiple, i;
    const [min, max] = input.sort((a, b) => a - b);
    const numberdivisors = max - min + 1;

    //largest value for SCM
    var upperbound = 1;
    for(i=min; i<=max; i++){
        upperbound = upperbound * i;
        console.log(upperbound);
    }
    //check all values of max
   for(multiple=max; multiple<=upperbound; multiple++)
    {
        divisorcount = 0;
        //check all values of array
        for(i=min; i<=max; i++)
       {
            if(multiple % i === 0)
            {
                divisorcount++;
            } 
        }
        console.log(divisorcount);
 
        if(divisorcount === numberdivisors){
            console.log(" " +multiple +'is divisible by all' );
            document.getElementById('getpara').innerHTML = "The shortest commom divisor of" + " " +input + " " + "is " +multiple; 
            break; 
        }                
    } 
}

//destroyer function
//generating three random numbers
function destroyer(d_arr){
    ar = d_arr;
    random = Array();
    for(i=0; i<3; i++)
    {
        random[i]= Math.floor(Math.random() *10);
    }
    console.log(random);
    document.getElementById('randome').innerHTML = "The three random elements are : "+random;
    destroyerfn(ar, random);//method destroyer fn with two arguments (random elements & user entered array)
}

function destroyerfn(a, b){
    total = a;
    ranarr = b;
    newarr = Array();
    result = Array();

    //concat the both arrays
    total = total.concat(ranarr);
    newarr = total.join("");//making a string of an array

    //clearly see the difference in console(first two console's)
    console.log(newarr);
    console.log(total);
//make two loops to iterate newarr and total
        for(i=0; i<newarr.length-1; i++)
        {
            for(var j=i+1; j<newarr.length; j++)
            {
                if(newarr[i] === newarr[j])
                {
                   newarr =  newarr.replace(newarr[j], "");
                }
            }
        }
//making an array of string
        for(i=0; i<newarr.length; i++)
        {
            result.push(newarr[i]);
        }
        console.log(result);
        document.getElementById('destroyedArray').innerHTML ="The new Array : " +result;
}


function palindromequalifier(a){
    str = a;
    arr = Array();
    console.log(str);
        //removes all special characters / comma/ spaces/ digits.  
        arr = str.replace(/[\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\[\]\:\;\'\"\|\~\`\_\-]|,|\s|\d|/g, "");
        arr = arr.toUpperCase();
        console.log(arr);
        palindromechecker(arr);
}

function palindromechecker(a){
    pal = a;
    palarray = Array();

    for(i=pal.length-1; i>=0; i--)
    {
        palarray.push(pal[i]);
    }
    console.log(palarray);
    palarray = palarray.join("");
    console.log(palarray);
    if(palarray === pal){
        document.getElementById('pal').innerHTML = "Your String is plaindrome :  " +pal;
    }
    else{
        document.getElementById('pal').innerHTML = "Your String is not plaindrome";
    }
}