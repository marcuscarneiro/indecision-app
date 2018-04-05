var nameVar = 'Marcus';
var nameVar = 'Joao';
console.log('nameVar ', nameVar);

let nameLet = 'Marcus';
nameLet = 'Joao';
console.log('nameLet ', nameLet);

const nameConst = 'Marcus';
console.log('nameConst ', nameConst);

// Block scoping

const fullName = 'Marcus Carneiro';
let firstName;

if(fullName){
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);