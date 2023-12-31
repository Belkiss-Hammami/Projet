function valeur1(a1,b1,c1,f1){
    var val1 = document.getElementById(new String(a1)).value;
    var Taux1 = document.getElementById(new String(b1)).value; 
    var nbr1 = document.getElementById(new String(c1)).value;
    var somme=0;
    const v1 = new Number (val1);
    const t1 = new Number (Taux1);
    const d1 = new Number (nbr1);
    
    for(let i=1;i<v1+1;i++){
        let y=t1/100;
        somme+=Math.pow(1+y,i)*d1;
    }

    if(v1<0 || d1<0)
        alert("ERROR! Donner un nombre de periodes et un montant positif")
     
    else if (t1>100 || t1<0){
        alert(" ERROR! Taux incorrect")
    }
    else{    
     
      document.getElementById(new String(f1)).innerHTML=somme;
 
    }
}

function valeur2(a2,b2,c2,f2){
    var val2 = document.getElementById(new String(a2)).value;
    var taux2 = document.getElementById(new String(b2)).value; 
    var nbr2 = document.getElementById(new String(c2)).value;
    var somme=0;
    const t2 = new Number (taux2);
    const v2 = new Number (val2);
    const d2 = new Number (nbr2);
    


    for(let i=0;i<v2;i++){
        let m=t2/100;
        somme+=Math.pow(1+m,i)*d2;
    }

    if(v2<0 || d2<0)
        alert("Error SVP donner un nombre de periodes et un montant positif")
     
    else if (t2>100 || t2<0){
        alert("Error! Taux incorrect")
    }
    else{    
     
      document.getElementById(new String(f2)).innerHTML=somme;
 
    }
}

function valeur3(a3,b3,c3,f3){
    var taux3 = document.getElementById(new String(b3)).value; 
    var nbr3 = document.getElementById(new String(c3)).value;
    var val3 = document.getElementById(new String(a3)).value;
    var somme=0;
    const t3 = new Number (taux3);
    const v3 = new Number (val3);
    const d3 = new Number (nbr3);
    


    for(let i=0;i<v1;i++){
        let y=t3/100;
        let z=Math.pow(1+y,i);
        somme+=d3*(1/z);
    }

    if(v3<0 || d3<0)
        alert("error SVP inserez un nombre de periodes et un montant positives")
     
    else if (t3>100 || t3<0){
        alert("Taux incorrete")
    }
    else{    
     
      document.getElementById(new String(f3)).innerHTML=somme;
 
    }
}

function valeur4(a4,b4,c4,f4){
    var taux4 = document.getElementById(new String(b4)).value; 
    var nbr4 = document.getElementById(new String(c4)).value;
    var val4= document.getElementById(new String(a4)).value;
    var somme=0;
    const t4 = new Number (taux4);
    const v4 = new Number (val4);
    const d4 = new Number (nbr4);
   


    for(let i=1;i<v4+1;i++){
        let y=t4/100;
        let z=Math.pow(1+y,i);
        somme+=d4*(1/z);
    }

    if(v4<0 || d4<0)
        alert("Il faut inserez un nombre de periodes et un montant positives")
     
    else if (t4>100 || t4<0){
        alert("Taux incorrecte")
    }
    else{    
     
      document.getElementById(new String(f4)).innerHTML=somme;
 
    }
}