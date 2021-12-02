let name = prompt('Введите своё имя');

let myStringArray = [`Happy birthday to you `,
            `Happy birthday to you`, 
            `Happy birthday, dear ${name}`,   
            `Happy birthday to you`];

let arrayLength = myStringArray.length;
for (let i = 0; i < arrayLength; i++) {
    console.log(myStringArray[i]);
};
