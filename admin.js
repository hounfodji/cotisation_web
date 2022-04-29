function opt_sel(){   // permet de détecter quelle est l'option de select qui est prise en compte
    var opt = document.getElementById("id_membre").options;
    for(let i=0;i<5;i++){
        if(opt[i].selected == true)
            return i;
        else
            continue;
    }
}
function submit(n){
    var price = document.getElementById("price").value, date = document.getElementById("date").value;
    document.getElementById(`${2*n+1}`).innerHTML = date;
    document.getElementById(`${2*n+2}`).innerHTML = price;
}
