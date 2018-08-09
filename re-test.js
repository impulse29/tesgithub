//soal 2

function Chiper(txt) {

    var z = txt.split('');
    for (i = 0; i < z.length; i++) {
    
    switch(z[i]) 
    {
        case ' ':
        break;
    
        case 'z':
        z[i] = 'a';
        break;
        case 'Z': 
        z[i] = 'A';
        break;
        default:
    z[i] = String.fromCharCode(2 + z[i].charCodeAt(0));
    }
    
    
    switch(z[i]) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
    z[i] = z[i].toUpperCase();
            }
        }
    return z.join('');
    }
    console.log(Chiper("12adsada-"));



// soal 1
var number = 087886177363;
var v = '-';
	
var	numString = number.toString(),
	x = numString.length % 4,
	y = numString.substr(0, x),
	z = numString.substr(x).match(/\d{3}/gi);
		
if (z) {
	pemisah = x ? v : '';
	y += pemisah + z.join(v);
}

console.log(y);
