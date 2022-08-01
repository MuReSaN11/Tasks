// !Task1
const nameCity = 'Vinnitsia';
const nameCountry = 'Ukraine';
const numberPeople = 370834;
const stadium = true;

const info = 'Назва- ' + nameCity + ' ' + 'Країна-' + nameCountry + ' ' + 'Численість населення-' + numberPeople + ' ' + 'Наявність стадіона-' + stadium;
console.log('Інформація про місто: ' + info);

// !Task2
const heightRectangle = 40;
const weightRectangle = 70;
const result = heightRectangle * weightRectangle;
console.log('Площа прямокутника: ' + result + 'см');

// !Task3
const time = 2;
const speedOfFirst = 95;
const speedOfSecond = 114;
const raiceFirst = speedOfFirst * time;
const raiceSecond = speedOfSecond * time;
const distance = raiceFirst + raiceSecond;
console.log('Відстань між містами: ' + distance + 'км');

// !Task4
const randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);
if (randomNumber < 20) {
    console.log(randomNumber + ' меньше 20');
}
else if (randomNumber > 50) {
    console.log(randomNumber + ' більше 50');
} else {
    console.log(randomNumber + ' більше 20 і менше 50');
}
// !Task5
const randomNumber1 = Math.floor(Math.random() * 100);

// ?
switch (true) {
    case randomNumber1 < 20:
        console.log(randomNumber1 + ' меньше 20');
        break;
    case randomNumber1 > 50:
        console.log(randomNumber1 + ' більше 50');
        break;
    default:
        console.log(randomNumber1 + ' більше 20 і менше 50');
};
