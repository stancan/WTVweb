

const month = ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"];
const d = new Date();
let rok = d.getFullYear();
let akt_mesic = d.getMonth();
let akt_Den = d.getDate();
let prvni_Den;
let posledni_Den;
let pr_posledni_Den;
let dny_array = [];
let dny_pom = [];
let zac_bod = 0;
let vinul = 0;
let pom1 = [];
let pom2 = [];
function datumy() {

    prvni_Den = new Date(rok, akt_mesic, 1);
    prvni_Den = prvni_Den.getDay();
    posledni_Den = new Date(rok, akt_mesic + 1, 0);
    posledni_Den = posledni_Den.getDate();
    pr_posledni_Den = new Date(rok, akt_mesic, 0);
    pr_posledni_Den = pr_posledni_Den.getDate();
    document.getElementById("mes").innerHTML = month[akt_mesic] + ", " + rok;
}

function prevmonth() {
    if (akt_mesic == 0) {
        akt_mesic = 11;
        rok--;
    }
    else {
        akt_mesic--;
    }
    datumy();
    generujDny();
}
function nextmonth() {
    if (akt_mesic == 11) {
        akt_mesic = 0;
        rok++;
    }
    else {
        akt_mesic++;
    }
    datumy();
    generujDny();
}
function selectD(div, den) {
    akt_Den = den;
    if (div.classList.contains("cadny")) {
        div.classList.remove("cadny");
        div.classList.add("cdny");
        pom1 = [];
    }
    else {
        div.classList.remove("cdny");
        div.classList.add("cadny");
        if (pom1.length > 0) {
            pom1[0].classList.remove("cadny");
            pom1[0].classList.add("cdny");
            pom1 = [];
            pom1.push(div);
        }
        else {
            pom1.push(div)
        }
    }
    generujCasy();
}
function selectC(div) {
    if (div.classList.contains("vybcas")) {
        div.classList.remove("vybcas");
        div.classList.add("cascss");
        pom2 = [];
    }
    else {
        div.classList.remove("cascss");
        div.classList.add("vybcas");
        if (pom2.length > 0) {
            pom2[0].classList.remove("cascss");
            pom2[0].classList.add("vybcas");
            pom2 = [];
            pom2.push(div);
        }
        else {
            pom2.push(div)
        }
    }
}
function generujDny() {
    akt_Den = d.getDate();
    document.getElementById("adny").innerHTML = "";
    dny_array = [];
    dny_pom = [];
    zac_bod = 0;
    vynul = 0;
    if (prvni_Den == 0) {
        zac_bod = pr_posledni_Den - 5;
    }
    else {
        zac_bod = pr_posledni_Den - (prvni_Den - 2);
    }
    for (let i = 0; i < 42; i++) {
        if ((zac_bod > pr_posledni_Den && i < 7) || (zac_bod > posledni_Den && i > 7)) {
            zac_bod = 1;
            vynul++;
        }
        dny_array[i] = document.createElement("div");
        dny_array[i].innerHTML = zac_bod;
        dny_pom.push(zac_bod);
        if ((zac_bod >= akt_Den && vynul == 1 && akt_mesic == d.getMonth()) || (rok >= d.getFullYear() && akt_mesic > d.getMonth()&& vynul==1) || (rok > d.getFullYear()&&vynul==1)) {
            dny_array[i].classList.add("cdny");
            dny_array[i].addEventListener("click", function () { selectD(dny_array[i], dny_pom[i]); });
        }
        else {
            dny_array[i].classList.add("pdny");
        }
        document.getElementById("adny").appendChild(dny_array[i]);
        zac_bod++;
    }
}
function disableS(sp, sele, sport, hala, hala1, hala2, hala3) {
    if (sp == sport) {
        for (let i = 0; i < sele.length; i++) {
            if (sele[i].value == "") {
                sele[i].selected = true;
            }
            if (sele[i].value == hala || sele[i].value == hala1 || sele[i].value == hala2 || sele[i].value == hala3) {
                sele[i].disabled = false;
            }
            else[
                sele[i].disabled = true
            ]


        }
    }
}
function selectS() {

    let sp = document.getElementById("sport").value;
    var sele = document.getElementById("tel").getElementsByTagName("option");
    disableS(sp, sele, "volejbal", "Sportovní hala ZČU");
    disableS(sp, sele, "basketbal", "Sportovní hala ZČU");
    disableS(sp, sele, "házená", "Sportovní hala ZČU");
    disableS(sp, sele, "florbal", "Sportovní hala ZČU");
    disableS(sp, sele, "fotbal", "Sportovní hala ZČU", "Area D", "Slavie VŠ");
    disableS(sp, sele, "horolezení", "Sportovní hala ZČU");
    disableS(sp, sele, "judo", "Malá tělocvična ZČU",);
    disableS(sp, sele, "zdravotní TV", "Malá tělocvična ZČU", "Zrcadlový sál ZČU");
    disableS(sp, sele, "sebeobrana pro ženy", "Malá tělocvična ZČU");
    disableS(sp, sele, "cvičení TRX", "Zrcadlový sál ZČU");
    disableS(sp, sele, "kruhový trénink", "Zrcadlový sál ZČU");
    disableS(sp, sele, "kondiční posilování", "Posilovna ZČU");
    disableS(sp, sele, "výuka horolezení", "Horolezecká stěna");
    disableS(sp, sele, "Squash", "Squash  SPORTPALACE");
    disableS(sp, sele, "badminton", "Area D", "Tělocvična - koleje Lochotín ");
    disableS(sp, sele, "Plavání", "Plavecký bazén");
    disableS(sp, sele, "moderní pohybové hry", "Plavecký bazén", "Tělocvična FPE");
    disableS(sp, sele, "tenis", "Slavie VŠ");
    disableS(sp, sele, "frisbee", "Slavie VŠ");
    disableS(sp, sele, "softbal", "Slavie VŠ");
    disableS(sp, sele, "KO - PO", "Tělocvična - koleje Lochotín ");
    disableS(sp, sele, "lyže -běh", "Tělocvična - koleje Lochotín ");
    disableS(sp, sele, "lyže sjezd", "Tělocvična - koleje Lochotín ");
    disableS(sp, sele, "orientační běh", "Tělocvična - koleje Lochotín ");
    disableS(sp, sele, "redukční cvičení", "Tělocvična FPE");
}
function generujCasy() {
    document.getElementById("cas").innerHTML = "";
    let casA = [];
    for (let i = 0; i < 25; i++) {
        casA[i] = document.createElement("div");
        casA[i].innerHTML = i + ":00";
        if ((d.getHours() < i &&akt_Den==d.getDate()) || akt_Den > d.getDate()||akt_mesic>d.getMonth()||rok>d.getFullYear()) {
            casA[i].classList.add("cascss");
            casA[i].addEventListener("click", function () { selectC(casA[i]); });
        }
        else { casA[i].classList.add("pcas"); }
        document.getElementById("cas").appendChild(casA[i]);
    }
}
window.addEventListener('load', (event) => {
    datumy();
    generujDny();
});