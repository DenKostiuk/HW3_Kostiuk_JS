let num = Number(prompt('Введите число'));
let sum = 0;

if (isNaN(num)) {
    num = Number(prompt('Было введено не число, попробуйте еще раз'));
    for (let i = 1; i <= num; i += 2) {
        console.log(i);
        sum = sum + i;
    };
} else {
    for (let i = 1; i <= num; i += 2) {
        console.log(i);
        sum = sum + i;
    };
};

console.log(sum);


