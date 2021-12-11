var pvTab = [75,90,110,85,150,150,150];
var pmTab = [15,15,15,15];
var defTab = [0,0,0,0,0,0,0];
var attTab = [35,50,45,65,25,25,25];
var enVie = [true,true,true,true,true,true,true];
var nomTab = ["Bourrasque","Tempête", "Paratonerre", "Foudre", "Mastodonte", "Mammouth", "Ours"];
var btnAtt = document.getElementById("btnAtt");
var lancer = document.getElementById("lancer");

lancer.onclick= function choix(){ //Affiche les boutons pour permettre le choix de l'action
    document.getElementById("Actions").style.display="block" ;
    var compteur=0;
    while (compteur<=3) {
        if (enVie[compteur]==true){
            document.getElementById("texte").innerHTML="Au tour de "+ nomTab[compteur] ;
            document.getElementById("fleche"+ compteur).style.display="block" ;
        }
        else{
            compteur=compteur+1;
        }
        document.getElementById("lancer").style.display="none" ;
    }
}
function attaque(){
    document.getElementById("Actions").style.display="none" ;
    document.getElementById("texte").innerHTML="Sélectionnez une cible";
    ennemi1.onclick = function dégâts1(){
       pvTab[4] = pvTab[4]-(attTab[compteur]-defTab[4])
        if (pvTab[4]<=0){
            enVie[4]=false
        }
        compteur=compteur+1;
    }
    ennemi2.onclick = function dégâts2(){
        pvTab[5] = pvTab[5]-(attTab[compteur]-defTab[5])
        if (pvTab[5]<=0){
            enVie[5]=false
        }
        compteur=compteur+1;
    }
    ennemi3.onclick = function dégâts3(){
        pvTab[6] = pvTab[6]-(attTab[compteur]-defTab[6])
        if (pvTab[6]<=0){
            enVie[6]=false
        }
        compteur=compteur+1;
    }
}
function defense(){
    document.getElementById("Actions").style.display="none" ;
    defTab[compteur]=defTab[compteur]+10
    compteur=compteur+1;
}
    
function special(){
    document.getElementById("Actions").style.display="none" ;
    if (compteur==0){
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
        ennemi3.onclick = function TM3(){
            document.getElementById("texte").innerHTML="Bourrasque utilise Tir Mortel !"
            pvTab[6] = pvTab[6]-(50-defTab[6])
            if (pvTab[6]<=0){
                enVie[6]=false
            }
        }
        
    }
    if (compteur==1){
        document.getElementById("texte").innerHTML="Tempête utilise Réparations !"
        if (pvTab[1]<70){
            pvTab[1]=pvTab[1]+20
        }
        else {pvTab[1]=90}
    }
    if (compteur==2) {
            
    }
}