const bil1 = parseFloat(prompt('masukkan bilangan ke-1 :'))
const bil2 = parseFloat(prompt('masukkan bilangan ke-2 :'))
const operator = prompt('masukkan operator : +, -, *, /')
let hasil


if (operator == '+')
{
    hasil = bil1 + bil2
}
else if (operator == '-')
{
    hasil = bil1 - bil2
}
else if (operator == '*')
{
    hasil = bil1 * bil2
}
else if (operator == '/')
{
    hasil = bil1 / bil2
}
else
{
    'error'
}

alert(`${hasil}`)

