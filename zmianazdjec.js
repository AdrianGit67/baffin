var numer = Math.floor(Math.random()*21)+1;

function schowaj()
{
    $("#slajder").fadeOut(500);
}

function zmienSlajd()
{
    numer++; 
    if(numer>22) numer =1;
    var plik = "<img src=\"zdjecia/z" + numer + ".png\"/>";
    document.getElementById("slajder").innerHTML = plik;
    $("#slajder").fadeIn(500);

    setTimeout("zmienSlajd()", 3000);
    setTimeout("schowaj()", 2500);

}