function oblicz() {
    var pKwota = 0; 

    var inpDokumenty = document.getElementById("ldokumentow");
    var lDokumentow = Number(inpDokumenty.value);
    if(lDokumentow == "" || lDokumentow < 1)
    {
        inpDokumenty.style.border = "solid red 1px";
        alert("Błąd: Prosze podać odpowiednią liczbę dokumentów!");
        return;
    }
    var rbrv = document.getElementById("rbrv");
    var rzrv = document.getElementById("rzrv");
    var kbrv = document.getElementById("kbrv");
    var kzrv = document.getElementById("kzrv");
    var pKsiegowosc = document.getElementById("pksiegowosc");
    if( rbrv.checked == false && rzrv.checked == false && kbrv.checked == false && kzrv.checked == false && pKsiegowosc.checked==false)
    {
        alert("Błąd: Prosze zaznaczyć odpowienią opcję w zakładce KSIĘGOWOŚĆ!")
        return;
    }
    var inpOsoby = document.getElementById("lludzi");
    var lOsob = Number(inpOsoby.value);
    var uOPrace = document.getElementById("umowaoprace");
    var uCywilna = document.getElementById("umowacywilna");
    if(lOsob != 0)
    {
        if(uOPrace.checked == false && uCywilna.checked == false)
        {
            alert("Błąd: Prosze zaznaczyć odpowienią opcję w zakładce KARDY I PŁACE!")
            return;
        }
    }

    if (lDokumentow > 0 && lDokumentow <= 10) {
        if (rbrv.checked) pKwota += 280; 
        if (rzrv.checked) pKwota += 300;
        if (kbrv.checked) pKwota += 290;
        if (kzrv.checked) pKwota += 310;
        
        if (pKsiegowosc.checked) {
            var wiadomosc = document.getElementById("liczba");
            wiadomosc.innerHTML = "Do indywidualnego ustalenia";
            wiadomosc.style.fontSize = "34px";
            return;
        }
    } 
    else if (lDokumentow > 10 && lDokumentow <= 20) {
        if (rbrv.checked) pKwota += 330;
        if (rzrv.checked) pKwota += 350;
        if (kbrv.checked) pKwota += 340;
        if (kzrv.checked) pKwota += 360;
        if (pKsiegowosc.checked) pKwota += 760;
    } 
    else if (lDokumentow > 20 && lDokumentow <= 30) {
        if (rbrv.checked) pKwota += 380;
        if (rzrv.checked) pKwota += 400;
        if (kbrv.checked) pKwota += 390;
        if (kzrv.checked) pKwota += 410;
        if (pKsiegowosc.checked) pKwota += 810;
    }
    else if(lDokumentow >30 && lDokumentow <=40)
    {
        if (rbrv.checked) pKwota += 430;
        if (rzrv.checked) pKwota += 450;
        if (kbrv.checked) pKwota += 440;
        if (kzrv.checked) pKwota += 460;
        if (pKsiegowosc.checked) pKwota += 860;
    }
    else if(lDokumentow >40 && lDokumentow <=50)
    {
        if (rbrv.checked) pKwota += 480;
        if (rzrv.checked) pKwota += 500;
        if (kbrv.checked) pKwota += 490;
        if (kzrv.checked) pKwota += 510;
        if (pKsiegowosc.checked) pKwota += 910;
    }
    else if(lDokumentow >50 && lDokumentow <= 60)
    {
        if (rbrv.checked) pKwota += 530;
        if (rzrv.checked) pKwota += 550;
        if (kbrv.checked) pKwota += 540;
        if (kzrv.checked) pKwota += 560;
        if (pKsiegowosc.checked) pKwota += 960;
    }
    else {
        var wiadomosc = document.getElementById("liczba");
        wiadomosc.innerHTML = "Do indywidualnego ustalenia";
        wiadomosc.style.fontSize = "34px";
        return; 
    }

    if(lOsob>=0 && lOsob <= 3)
    {
        if(uOPrace.checked == true) pKwota += (lOsob*75);
        if(uCywilna.checked == true) pKwota += (lOsob*60);
    }
    if(lOsob >3 && lOsob <= 9) 
    {
        if(uOPrace.checked == true) pKwota += (lOsob*70);
        if(uCywilna.checked == true) pKwota += (lOsob*50);
    }
    else
    {
        if(uOPrace.checked == true) pKwota += (lOsob*60);
        if(uCywilna.checked == true) pKwota += (lOsob*40);
    }
    var wynik = document.getElementById("liczba");
    wynik.innerHTML = pKwota + "zł";
    wynik.style.fontSize = "56px";
}