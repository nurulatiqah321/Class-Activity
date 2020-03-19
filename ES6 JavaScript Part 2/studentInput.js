const importStud = require('./studentClass.js');

const readline = require('readline');
const s = readline.createInterface({
input: process.stdin,
output: process.stdout
});

s.question('Name : ', (Name)=> {
s.question('Matric Number: ', (MatricNo)=> {
s.question('Major: ', (Major)=> {
s.close();

console.log(importStud.display());   

});
});
});

// let Student = {
//     display: () => {
//         console.log(`Your name is ${Name}`);
//         console.log(`Your matric number is ${MatricNo}`);
//         console.log(`Your major is ${Major}`);
//     }
// }
