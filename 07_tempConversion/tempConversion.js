const ftoc = function(tempInF) {
  

  return Math.round((tempInF-32)*5/9 * 10) / 10

};

const ctof = function(tempInC) {

  return Math.round((tempInC*9/5+32) * 10) / 10

 
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
