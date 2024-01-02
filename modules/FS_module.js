const {readFileSync, writeFileSync} = require('fs');

console.log("started");
const first = readFileSync('./content/text1.txt',
'utf8'
);

const second = readFileSync('./content/text2.txt', 'utf8');

console.log(first + second);

writeFileSync('./content/text3.txt', `This is the result ${first} , ${second}`, {
    flag: 'a' //append the result
});

console.log("done with the task");
console.log("next task");