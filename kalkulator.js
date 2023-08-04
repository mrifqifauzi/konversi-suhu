
const operator = prompt('Pilih operator ( either +, -, * or / ): ');


const bil1 = prompt('Masukkan bilangan 1 = ');
const bil2 = prompt('Masukkan bilangan 2 = ');

let hasil;


if (operator == '+') {
    hasil = bil1 + bil2;
}
else if (operator == '-') {
    hasil = bil1 - bil2;
}
else if (operator == '*') {
    hasil = bil1 * bil2;
}
else {
    hasil = bil1 / bil2;
}


alert(`${bil1} ${operator} ${bil2} = ${hasil}`);