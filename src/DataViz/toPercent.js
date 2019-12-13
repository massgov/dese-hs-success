import numbro from 'numbro';

const toPercent = (number, decimal) => {
  //console.log(number)
  const mantissa = decimal || 0;
  const percent = numbro(number).format({ output: 'percent', mantissa, spaceSeparated: false });
  return percent;
};

export default toPercent
