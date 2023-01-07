var select = document.querySelectorAll('.form-select');
var td = document.querySelectorAll("td");

const wielka_niedzwiedzica = {5: 4.5, 6: 4.6, 7: 4.8, 8: 5.2, 9: 5.2, 11: 5.7, 13: 5.8, 14: 6.0, 15: 6.1, 16: 6.2, 17: 6.3, 18: 6.4, 19: 6.5, 20: 6.6, 23: 6.7, 25: 6.8, 27: 6.9, 29: 7.0, 33: 7.1, 37: 7.2, 44: 7.3, 49: 7.4, 54: 7.5};
const lew = {7: 4.4, 8: 5.0, 11: 5.6, 13: 5.7, 15: 6.0, 18: 6.1, 20: 6.3, 21: 6.4, 24: 6.6, 25: 6.7, 29: 6.9, 32: 7.0, 34: 7.1, 38: 7.2, 40: 7.3, 44: 7.4, 45: 7.5};
const wolarz = {6: 4.5, 7: 4.7, 9: 4.9, 10: 5.0, 11: 5.3, 13: 5.7, 14: 5.8, 17: 5.9, 19: 6.0, 21: 6.1, 23: 6.2, 25: 6.3, 27: 6.4, 30: 6.5, 32: 6.6, 36: 6.7, 39: 6.8, 45: 6.9, 52: 7.0, 55: 7.1, 60: 7.2, 69: 7.3, 73: 7.4, 86: 7.5};
const psy = {4: 4.6, 5: 5.1, 6: 5.7, 7: 5.9, 9: 6.0, 11: 6.2, 13: 6.3, 14: 6.4, 17: 6.6, 19: 6.8, 22: 6.9, 24: 7.0, 26: 7.1, 27: 7.2, 28: 7.3, 33: 7.4, 36: 7.5 };

// Wartości domyślne
td[2].innerHTML = wielka_niedzwiedzica[5];
td[5].innerHTML = lew[7];
td[8].innerHTML = wolarz[6];
td[11].innerHTML = psy[4];

// Tworzenie opcji
Object.keys(wielka_niedzwiedzica).forEach(n3 => {
    select[0].innerHTML += `<option value="${n3}">${n3}</option>`;
})

Object.keys(lew).forEach(n9 => {
    select[1].innerHTML += `<option value="${n9}">${n9}</option>`;
})

Object.keys(wolarz).forEach(n11 => {
    select[2].innerHTML += `<option value="${n11}">${n11}</option>`;
})

Object.keys(psy).forEach(n16 => {
    select[3].innerHTML += `<option value="${n16}">${n16}</option>`;
})

// Zmiana wartości w zależności od kluczy
function pole3(){
    td[2].innerHTML = wielka_niedzwiedzica[select[0].value];
}

function pole9(){
    td[5].innerHTML = lew[select[1].value]; 
}

function pole11(){
    td[8].innerHTML = wolarz[select[2].value];   
}

function pole16(){
    td[11].innerHTML = psy[select[3].value]; 
}