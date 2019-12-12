const path = require('path');
const fs = require('fs');
const csv=require('csvtojson')

const dataPath = path.resolve(__dirname, '../public/data/');
const filePath = 'district';

const csvPath = `${dataPath}/${filePath}.csv`;
const jsonPath = `${dataPath}/${filePath}.json`;
console.log(csvPath)
csv()
.fromFile(csvPath)
.then((jsonObj)=>{
    fs.writeFileSync(jsonPath, JSON.stringify(jsonObj, null, 2), (err) => {
      if (err) throw err;
    });
})
