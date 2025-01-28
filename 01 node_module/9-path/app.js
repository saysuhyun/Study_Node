const path = require("path");

// POSIX (Unix: Mac, Linux): 'Users/temp/myfile.html'
// Windows: 'C:\\temp\\myfile.html'

console.log(__dirname); // global 이름들
console.log(__filename);

console.log(path.sep);
console.log(path.delimiter);

// basename
console.log(path.basename(__filename)); // app.js
console.log(path.basename(__filename, ".js")); // app

// dirname 디렉토리 이름
console.log(path.dirname(__filename));

// extension 확장자
console.log(path.extname(__filename));

//parse 경로 분리
const parsed = path.parse(__filename);
console.log(parsed);
parsed.root;
parsed.name;

const str = path.format(parsed);
console.log(str);

// isAbsolute
console.log("isAbsolute?", path.isAbsolute(__dirname)); // /Users/
console.log("isAbsolute?", path.isAbsolute("../"));

// normalize
console.log(path.normalize("./folder////////sub"));

// join
console.log(__dirname + path.sep + "image");
console.log(path.join(__dirname, "image"));
