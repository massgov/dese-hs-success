const path = require('path');
const fs = require('fs');
const csv=require('csvtojson')

/**
  * $ node ./scripts/csv-to-json.js district district
  * @param {1} script_path_from_root - ./scripts/csv-to-json.js
  * @param {2} inputPath - path relative to the public/data folder with fileName without file extension
  e.g. district
  e.g. 10/grade_10_data
  * @param {3} outputPath - path relative to the public/data folder with fileName without file extension
  e.g. district
  e.g. 10/data
*/

let inputPath = '';
let outputPath = '';
process.argv.forEach((val, index) => {
  switch (index) {
    case 2:
      inputPath = val;
      break;
    case 3:
      outputPath = val;
      break;
    default:
      null
  }
});

const dataPath = path.resolve(__dirname, '../public/data/');

const csvPath = `${dataPath}/${inputPath}.csv`;
const jsonPath = `${dataPath}/${outputPath}.json`;

Object.prototype.renameProperty = function (oldName, newName) {
     // Do nothing if the names are the same
     if (oldName === newName) {
         return this;
     }
    // Check for the old property name to avoid a ReferenceError in strict mode.
    if (this.hasOwnProperty(oldName)) {
        this[newName] = this[oldName];
        delete this[oldName];
    }
    return this;
};

keyMapping = [{
  csvKey: 'Metric',
  jsonKey: 'metric'
}, {
  csvKey: 'Description',
  jsonKey: 'description'
}, {
  csvKey: 'Count of Students',
  jsonKey: 'count'
}, {
  csvKey: 'Rate',
  jsonKey: 'rate'
}]

csv()
.fromFile(csvPath)
// .subscribe((jsonObj,index)=>{
//     keyMapping.forEach(({ csvKey, jsonKey }) => {
//       jsonObj.renameProperty(csvKey, jsonKey)
//     })
// })
.then((jsonObj)=>{
    fs.writeFileSync(jsonPath, JSON.stringify(jsonObj, null, 2), (err) => {
      if (err) throw err;
    });
    console.log(`${outputPath} JSON converted from ${inputPath} CSV`);
})
