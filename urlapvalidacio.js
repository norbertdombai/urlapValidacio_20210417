window.addEventListener("load", init);

function ID(nev) {
    return document.getElementById(nev);
}

function $(nev) {
    return document.querySelectorAll(nev);
}

function init() {
    ID("kuld").addEventListener("click", validacio);

}
function torles() {
    document.getElementById("torlesek").reset();
}


function validacio() {
    var hiba = "";
    var urlapAdatok = "";
    var nevInput = ID("nev").value;
    console.log(nevInput);
    if (nevInput.length < 3) {
        hiba = "A név minimum 3 karakter legyen!<br>"; //itt felülírjuk a hiba változót
    }
    var szuro = /[A-Z]/; //megadjuk a reguláris kifejezést,l egyen benne kis nagy betű legalább 2
    if (!szuro.test(nevInput)) {
        hiba += "A név nagybetűvel kezdődjön!<br>"; //+= hozzáfűzés, így mind a 2 hibát kiírja
        ID("nev").style.border = "1px solid red";
    } else {
        urlapAdatok += "Név: " + nevInput + "<br>";
        ID("nev").style.border = "1px solid green";
    }
    //email
    var emailInput = ID("e-mail").value;
    var szuroEmail = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+[.]+[a-zA-Z0-9]/;
    console.log(emailInput);
    if (!szuroEmail.test(emailInput)) {
        hiba += "Érvénytelen e-mail címet adott meg!<br>";
        ID("e-mail").style.border = "1px solid red";
    } else {
        urlapAdatok += "E-mail: " + emailInput + "<br>";
        ID("e-mail").style.border = "1px solid green";
    }
    
    //email ujra
    var emailujraInput = ID("e-mail1").value;
    if (emailInput !== emailujraInput) {
        hiba += "A két e-mail cím nem egyezik!" + "<br>";
        ID("e-mail1").style.border = "1px solid red";
    } else {
        urlapAdatok += "E-mail újra: " + emailujraInput + "<br>";
        ID("e-mail1").style.border = "1px solid green";
    }

    //telefonszam
    var telszamInput = ID("telszam").value;
    var szuroTelszam = /[+]([0-9]{2})-([0-9]{2})-([0-9]{3})-([0-9]{4})/;
    if (!szuroTelszam.test(telszamInput)) {
        hiba += "Hibás formátumú telefonszámot adott meg!" + "<br>";
        ID("telszam").style.border = "1px solid red";
    } else {
        urlapAdatok += "Telefonszám: " + telszamInput + "<br>";
        ID("telszam").style.border = "1px solid green";
        
    }

    var webInput = ID("web").value;
    var szuroUrl = /[http:]+[//]+[a-zA-Z]+[.]+[a-zA-Z]/;
    if (!szuroUrl.test(webInput)) {
        hiba += "Érvénytelen url címet adott meg!" + "<br>";
        ID("web").style.border = "1px solid red";
    } else {
        urlapAdatok += "Weboldal: " + webInput + "<br>";
        ID("web").style.border = "1px solid green";
    }

    var prioritasInput = ID("prioritas").value;
    urlapAdatok += "Prioritás: " + prioritasInput + "<br>";

    var uzenetInput = ID("uzenet").value;
    urlapAdatok += "Üzenet: " + uzenetInput;

    $("aside section:nth-child(1) p")[0].innerHTML = hiba; //az elso aside elso sectionát childre rakjuk, és az első p tagra rakjuk a hibát inner htmlel
    $("aside section:nth-child(2) p")[0].innerHTML = urlapAdatok; //2. aside elem(2)
    console.log(hiba);
}

