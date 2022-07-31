const fs = require('fs');
const myPath = "./api/someinfo.json"

let student = {"success": true, 'addList': []};
if('addList' in student) {
    student['addList'] = []
}
let r = (Math.random() + 1).toString(36).substring(7);
student['addList'].push(r)
if (!fs.existsSync(myPath)){
    fs.mkdirSync(myPath, { recursive: true });
}
fs.writeFileSync(myPath, JSON.stringify(student))

console.log(student);
