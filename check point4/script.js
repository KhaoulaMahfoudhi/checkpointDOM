function myFunctiond() {
    var myobj = document.getElementById("delete");
    myobj.remove();
    somme();
}

let hearts = document.getElementsByClassName("fa-heart")
for(let heart of hearts){
    heart.addEventListener("click", function(){
heart.classList.toggle("red");
    });
}

let buttonplus = document.getElementsByClassName("add");
for( let plus of buttonplus){
    plus.addEventListener("click", function(){

        plus.nextElementSibling.innerHTML ++;
        somme();
    });
}
let buttonmins = document.querySelectorAll(".min");
for (let i=0 ; i < buttonmins.length; i++){
    buttonmins[i].addEventListener("click", function() {
        if(buttonmins[i].previousElementSibling.innerHTML > 0){
            buttonmins[i].previousElementSibling.innerHTML--;
        }
        somme();
    });
}

function somme(){
    let quantity = document.getElementsByClassName("qte");
    let prices = document.getElementsByClassName("price");
    let sum =0;
    for(let i =0; i< quantity.length; i++){
        sum += quantity[i].innerHTML * prices[i].innerHTML;
    }
    return (document.getElementById("totalp").innerHTML= "shooping bag total : $" + sum);
}







     
  
