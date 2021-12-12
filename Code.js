var pvTab = [75,90,110,85,150,150,150];
var pmTab = [15,15,15,15];
var defTab = [0,0,0,0,0,0,0];
var attTab = [35,50,45,65,25,25,25];
var enVie = [true,true,true,true,true,true,true];
var nomTab = ["Bourrasque","Tempête", "Paratonnerre", "Foudre", "Mastodonte", "Mammouth", "Ours"];
var btnAtt = document.getElementById("btnAtt");
var lancer = document.getElementById("lancer");
var compteur=0;

tour.onclick=function(){
    document.getElementById("tour").style.display="none" ;
    for (let i = 0; i < 5; i++){
lancer.onclick= function choix(){ //Affiche les boutons pour permettre le choix de l'action
        actionjouee=false
        if (enVie[compteur]==true){
            document.getElementById("Actions").style.display="block" ;
            document.getElementById("texte").innerHTML="Au tour de "+ nomTab[compteur] ;
            document.getElementById("fleche0").style.display="block" ;
            sleep()
        }
        else{
            compteur=compteur+1;
        }
    }
}
function sleep(){
    if (actionjouee==false) {
        setTimeout(sleep, 300);
    } 
}
document.getElementById("tour").style.display="block" ;
}

function attaque(){
    document.getElementById("Actions").style.display="none" ;
    document.getElementById("texte").innerHTML="Sélectionnez une cible";
    ennemi1.onclick = function dégâts1(){
        document.getElementById("texte").innerHTML=nomTab[compteur] + " attaque " + nomTab[4]
       pvTab[4] = pvTab[4]-(attTab[compteur]-defTab[4])
        if (pvTab[4]<=0){
            enVie[4]=false
        }
        compteur=compteur+1;
        actionjouee=true
    }
    ennemi2.onclick = function dégâts2(){
        pvTab[5] = pvTab[5]-(attTab[compteur]-defTab[5])
        if (pvTab[5]<=0){
            enVie[5]=false
        }
        compteur=compteur+1;
        actionjouee=true
    }
    ennemi3.onclick = function dégâts3(){
        pvTab[6] = pvTab[6]-(attTab[compteur]-defTab[6])
        if (pvTab[6]<=0){
            enVie[6]=false
        }
        compteur=compteur+1;
        actionjouee=true
    }
}
function defense(){
    document.getElementById("Actions").style.display="none" ;
    defTab[compteur]=defTab[compteur]+10
    compteur=compteur+1;
    actionjouee=true
}
    
function special(){
    document.getElementById("Actions").style.display="none" ;
    if (compteur==0){
        if (pmTab[0] <= 5) {
        texte.innerHTML="Sélectionnez une cible"
        ennemi1.onclick = function TM1(){
            document.getElementById("texte").innerHTML="Bourrasque utilise Tir Mortel !"
            pvTab[4] = pvTab[4]-(50-defTab[4])
            if (pvTab[4]<=0){
                enVie[4]=false
            }
            }
        ennemi2.onclick = function TM2(){
            document.getElementById("texte").innerHTML="Bourrasque utilise Tir Mortel !"
            pvTab[5] = pvTab[5]-(50-defTab[5])
            if (pvTab[5]<=0){
                enVie[5]=false
            }
            }
            compteur=compteur+1;
        actionjouee=true
        ennemi3.onclick = function TM3(){
            document.getElementById("texte").innerHTML="Bourrasque utilise Tir Mortel !"
            pvTab[6] = pvTab[6]-(50-defTab[6])
            if (pvTab[6]<=0){
                enVie[6]=false
            }
        }
    }
    else{
        document.getElementById("texte").innerHTML="Pas assez de PM"
    } 
    compteur=compteur+1;
        actionjouee=true
    }
    
    if (compteur==1){
        if (pmTab[1] <= 5) {
            document.getElementById("texte").innerHTML="Tempête utilise Réparations !"
            if (pvTab[1]<70){
                pvTab[1]=pvTab[1]+20
            }
            else {pvTab[1]=90}
        }
        else{
            document.getElementById("texte").innerHTML="Pas assez de PM"
        }
        compteur=compteur+1;
        actionjouee=true
    }
    if (compteur==2) {
        if (pmTab[2] <= 5) {
            document.getElementById("texte").innerHTML="Paratonnerre utilise Bouclier !"
            defTab[0] = defTab[0]+10;
            defTab[1] = defTab[1]+10;
            defTab[2] = defTab[2]+10;
            defTab[3] = defTab[3]+10;
        }
        else{
            document.getElementById("texte").innerHTML="Pas assez de PM"
        }
        compteur=compteur+1;
        actionjouee=true
    }
    if (compteur==3) {
        if (pmTab[3] <= 5) {
            document.getElementById("texte").innerHTML="Foudre utilise Démolition !"
            pvTab[4]= pvTab[4]-15;
            pvTab[5]= pvTab[5]-15;
            pvTab[6]= pvTab[6]-15;
            pmTab[3]=pmTab[3]-5;
        }
        else{
            document.getElementById("texte").innerHTML="Pas assez de PM"
        }
        compteur=compteur+1;
        actionjouee=true
    }
}
function riposte(){
    if (enVie[4]==true){
        cible=Math.floor(Math.random() * 4);
        while (enVie[cible]==false){
            cible=(Math.floor(Math.random() * 4)); 
        }
        document.getElementById("texte").innerHTML=nomTab[4] + " attaque " + nomTab[cible]
        pvTab[cible]=pvTab[cible]-(attTab[4]-defTab[cible])
        document.getElementById("pv"+cible).innerHTML=pvTab[cible]+" PV"
        if (pvTab[cible]<=0){
            enVie[cible]=false
        }
    }
    if (enVie[5]==true){
        cible=Math.floor(Math.random() * 4);
        while (enVie[cible]==false){
            cible=(Math.floor(Math.random() * 4)); 
        }
        document.getElementById("texte").innerHTML=nomTab[5] + " attaque " + nomTab[cible]
        pvTab[cible]=pvTab[cible]-(attTab[5]-defTab[cible])
        document.getElementById("pv"+cible).innerHTML=pvTab[cible]+" PV"
        if (pvTab[cible]<=0){
            enVie[cible]=false
        }
    }
    if (enVie[6]==true){
        cible=Math.floor(Math.random() * 4);
        while (enVie[cible]==false){
            cible=(Math.floor(Math.random() * 4)); 
        }
        document.getElementById("texte").innerHTML=nomTab[6] + " attaque " + nomTab[cible]
        pvTab[cible]=pvTab[cible]-(attTab[6]-defTab[cible])
        document.getElementById("pv"+cible).innerHTML=pvTab[cible]+" PV"
        if (pvTab[cible]<=0){
            enVie[cible]=false
        }
    }
}