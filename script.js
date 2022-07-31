const fs = require('fs');

let student = {"success": true, 'addList': []};
if('addList' in student) {
    student['addList'] = []
}
let r = (Math.random() + 1).toString(36).substring(7);
student['addList'].push(r)
fs.writeFileSync('./api/someinfo.json', JSON.stringify(student))

console.log(student);
