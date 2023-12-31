function verif(){
    da=document.getElementById("da").value;
    nu=document.getElementById("nu").value;
    li=document.getElementById("li").value;
    mo=document.getElementById("mo").value;
    if (!(veriftxt(da))){
        alert("verifier votre Date de la transaction")
    }
    if (!(verifnum(nu))){
        alert("verifier votre Numero du compte!!!!")
    }
    if (li==0){
        alert ("verifire un Libelle de la transaction svp !!!!")
    }
    if (isNaN(mo)>1){
        alert ("vierfier votre Montant de la transaction ")
    }
}
function veriftxt(ch){
    ch=ch.toUpperCase();
    test=true;
    i=0;
    if(ch.length!=10){
        test=false;
    }
    while((i<ch.length)&&(test==true)){
        if((ch.chraArt(i)<"A")&&(ch.chraArt(i)>"Z")){
            test=false;
        }
        i++;
    }
    return(test);
}
function verifnum(ch)
{
    if (ch.length!=20)
    {
        test=false;
    }
    else 
    {
        i=0;
        test=true;
        while((i<ch.length)&&(test==true)){
            if ((ch.chraArt(i)<"0")&&(ch.chraArt(i)>"9")){
                test=false;
            }
            i++;
        }
    }
    return (test);
   
}
function liste(){
    num=document.getElementById("num").value;
    mot=document.getElementById("mot").value;
    if(!(verifnum(num))){
        alert("verifier votre Numero du compte!!!!!!!")
    }
    if(!(veriftext(mot))){
        alert ("verifier votre Mot de passe!!!!!!!")
    }


}
function veriftext(ch){
    ch=ch.toUpperCase();
    test=true;
    i=0;
    if(ch.length!=8){
        test=false;
    }
    while((i<ch.length)&&(test==true)){
        if((ch.chraArt(i)<"A")&&(ch.chraArt(i)>"Z")){
            test=false;
        }
        i++;
    }
    return(test);
}