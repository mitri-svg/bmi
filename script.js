"use strict";
let weight = +prompt("Cekivizi bura yazin");
let height = +prompt("Boyuvuzu bura yazin");
let bMI = (weight / (height * height)) * 10000;
let cavab;
let cavab2;
let cavab3 = document.getElementById('h3')
let bmi2;

if (bMI < 18) {
    cavab3.style.backgroundImage = 'url(1.jpg)'
  cavab = "Siz, ceki azligindan eziyyet cekirsiniz ";
  bmi2 = 20 - bMI;
  cavab2 = `Sizin bmi iviz ${bmi2} qeder cox olmalidir`;
} else if (bMI >= 18 && bMI < 20) {
     cavab3.style.backgroundImage = 'url(1.jpg)'
  bmi2 = 20 - bMI;
  cavab2 = `Sizin bmi iviz ${bmi2} qeder cox olmalidir`;
  cavab = "Sizin cekiniz azdir. Lakin saglamliq ucun zererli deyil ";
} else if (bMI >= 20 && bMI < 26) {
    cavab3.style.backgroundImage = 'url(3.jpg)'
  bmi2 = 20 - bMI;
  cavab2 = `Size arixlamaq lazim deyil`;
  cavab =
    "Sizin cekiniz normaldir. Tebrikler !!!";
} else if (bMI >= 26 && bMI < 28) {
    cavab3.style.backgroundImage = 'url(2.jpg)'
  cavab = "Siz, 1-ci dereceli artiq cekiden eziyyet cekirsiniz";
} else if (bMI >= 28 && bMI < 31) {
    cavab3.style.backgroundImage = 'url(2.jpg)'
  bmi2 = bMI - 20;
  cavab2 = `Sizin bmi iviz ${bmi2} qeder az olmalidir`;
  cavab = "Siz, 2-ci dereceli artiq cekiden eziyyet cekirsiniz";
} else if (bMI >= 31 && bMI < 36) {
    cavab3.style.backgroundImage = 'url(2.jpg)'
  bmi2 = bMI - 20;
  cavab2 = `Sizin bmi iviz ${bmi2} qeder az olmalidir`;
  cavab = "Siz, 3-ci dereceli artiq cekiden eziyyet cekirsiniz";
} else if (bMI >= 36 && bMI < 41) {
    cavab3.style.backgroundImage = 'url(2.jpg)'
  bmi2 = bMI - 20;
  cavab2 = `Sizin bmi iviz ${bmi2} qeder az olmalidir`;
  cavab = "Siz, 4-ci dereceli artiq cekiden eziyyet cekirsiniz";
} else {
  cavab = "Sizin basinizda problem var";
}

document.getElementById("h1").innerHTML = cavab;
document.getElementById("h2").innerHTML = cavab2;