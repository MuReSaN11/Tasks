// !Task1
for (i = 10; i < 50; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

// !Task2

let info = {
    name: 'Bohdan',
    secondName: 'Dovhanenko',
    age: 19,
    PetsIt: true
};
console.log(info)

// !Task3
// ?!!?
const array = [
    'я в Симбирск,',
    'в трактире.',
    'с утра',
    'В ту же ночь',
    'Я остановился',
    'для закупки',
    'что и было поручено Савельичу.',
    'приехал,',
    'где должен был',
    'нужных вещей',
    'отправился по лавкам',
    'пробыть сутки',
    'Савельич'
]
let out_arr = document.getElementById('out_arr');
let str = ' ';
for (let i = 0; i < array.length; i++) {
    if (array[i] !== undefined) str += '' + '  ' + array[i] + '';
}
console.log(str)