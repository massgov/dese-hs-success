const path = require('path');
const fs = require('fs');
const csv=require('csvtojson')

/**
  * $ node budgets/shared-ui/utils/docs-to-json/generic docsPath jsonPath imgPath fileName
  * @param {1} script_path_from_root - ./scripts/csv-to-json.js
  * @param {2} inputPath - path relative to the public/data folder with fileName without file extension
  e.g. district
  e.g. 10/grade_10_data
  * @param {3} outputPath - path relative to the public/data folder with fileName without file extension
  e.g. district
  e.g. data
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

csv()
.fromFile(csvPath)
.then((jsonObj)=>{
    fs.writeFileSync(jsonPath, JSON.stringify(jsonObj, null, 2), (err) => {
      if (err) throw err;
    });
    console.log(`${outputPath} JSON converted from ${inputPath} CSV`);
})
