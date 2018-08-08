//soal 1
// array = [5, -6, -8, 4, -3, 6]
//positif = 15
//negatif = -17
//negatif win
//draw

var a = [1, 4, -5, -9, -4, 8, -25, 70]
var arraypos = [];
var arrayneg = [];
var x = 0;
var y = 0;
var totalpos = 0;
var totalneg = 0;

    for (var i = 0; i < a.length; i++) {
        if (a[i] > 0) {
        arraypos[x] = a[i]
        x++;
    }
}


    for (var i = 0; i < arraypos.length; i++) {
        totalpos = totalpos + arraypos[i]
}


    for (var i = 0; i < a.length; i++) {
         if (a[i] < 0) {
        arrayneg[y] = a[i]
        y++;
    }
}

    console.log(arrayneg);

    for (var i = 0; i < arrayneg.length; i++) {
    totalneg = totalneg - arrayneg[i]
}

    console.log(totalneg);

        if (totalpos > totalneg) {
            console.log('Positif Win.');
    } else if (totalpos < totalneg) {
        console.log('Negatif Win.');
    } else {
        console.log('Draw');
}


//soal 2
// string = 'a&z#7c6'
//angka = [6,7]
//huruf = [a,z,c]
// ambil huruf dan angka saja, abaikan simbol

var strval = 'a&z#7c6'

var regexHuruf = /[^A-Za-z]/g
string = strval.replace(regexHuruf, '');

huruf = string.split('');
console.log(huruf);

var regexAngka = /[^0-9]/g
number = strval.replace(regexAngka, '');

angka = number.split('');
console.log(angka);