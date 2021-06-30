const info = document.getElementById("Metadato")
var d = new Date();

if(d.getHours()>=7 && d.getHours()<11){
    info.innerText = "Noty Impacto";
}
else if(d.getHours()>=11 && d.getMinutes()>30 && d.getHours()<13){
    info.innerText = "Pasión Deportiva";
}
else if(d.getHours()>=5 && d.getHours()<7){
    info.innerText = "Música y Noticias";
}


