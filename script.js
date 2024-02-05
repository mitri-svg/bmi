"use strict";
let weight = +prompt('Cekivizi bura yazin');
let height = +prompt('Boyuvuzu bura yazin');
let bMI = weight / (height * height);
let cavab;

if (bMI < 18 ){
    cavab = "Siz, ceki azligindan eziyyet cekirsiniz";
} else if(bMI >= 18 && bMI < 20){
    cavab = "Sizin cekiniz azdir. Lakin saglamliq ucun zererli deyil";
} else if(bMI >=20 && bMI < 26){
    cavab = "Sizin cekiniz normaldir. Tebrikler !!!";
} else if(bMI >=26 && bMI < 28){
    cavab = "Siz, 1-ci dereceli artiq cekiden eziyyet cekirsiniz";
} else if(bMI >=28 && bMI < 31){
    cavab = "Siz, 2-ci dereceli artiq cekiden eziyyet cekirsiniz";
} else if(bMI >=31 && bMI < 36){
    cavab = "Siz, 3-ci dereceli artiq cekiden eziyyet cekirsiniz";
} else if(bMI >=36 && bMI < 41){
    cavab = "Siz, 4-ci dereceli artiq cekiden eziyyet cekirsiniz";
} else{
    cavab = "Sizin basinizda problem var;"
}

document.getElementById('h1').innerHTML = cavab