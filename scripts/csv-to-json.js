const path = require('path');
const csv=require('csvtojson')

const dataPath = path.resolve(__dirname, '../public/data/');
const filePath = 'district.csv';

const csvPath = `${dataPath}/${filePath}`;
console.log(csvPath)
csv()
.fromFile(csvPath)
.then((jsonObj)=>{
    console.log(jsonObj);
})
