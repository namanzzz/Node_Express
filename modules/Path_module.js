const path = require('path');

console.log(path.sep);

const filePath = path.join('/content','subfolder','test.txt');
console.log(filePath); // files path

const base = path.basename(filePath);
console.log(base); // base file

// (gloabl) __dirname = prev directory 
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt');
console.log(absolute);