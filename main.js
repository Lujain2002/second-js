var convert= document.querySelector(".registerForm");
convert.onsubmit= function (e){
    e.preventDefault();
    var amount=e.target.elements[0].value;
    var type= e.target.elements[1].value;
    if(type=='dollar'){
        document.querySelector(".result").innerHTML=(amount/3.75);
    }
    else if(type=="dinar"){
        document.querySelector(".result").innerHTML=(amount/5.28);
    
    }
    else{
        document.querySelector(".result").innerHTML=amount;

    }



}