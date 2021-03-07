module.exports = function check(str, bracketsConfig) {
  let newAr = [];
  let brackets = bracketsConfig.flat();
  let duplicates = brackets.filter((item, index) => brackets.indexOf(item) !== index).flat();
  // let count = {};
  // console.log(duplicates)

  for (let i = 0; i < str.length; i++) {
    let index = brackets.indexOf(str[i]);
    // console.log('i', i, 'index', index)
    if (index % 2 === 0) {
      let dupl = newAr.indexOf(duplicates.find(el => el === brackets[index + 1]));
      // console.log('dupl', dupl)
      if (dupl !== -1 && i > index) {
        newAr.splice(dupl, 1);
        // console.log('newAr.splice', newAr)
      } else {
        newAr.push((brackets[index + 1]));
        // console.log('newAr.push', newAr)
      }
    } else {
      // console.log('newAr.pop', newAr.pop(), 'index', index);
      if(newAr.pop() !== brackets[index]) {
        // console.log('2) newAr.pop', newAr);
        return false;
      };
    } 
  };
  // console.log('newAr', newAr);
  // if (duplicates.length !== 0) {
  //   newAr.forEach(el => {count[el] = (count[i] || 0) + 1});
  //   console.log('count', count)
  // } else {
    return newAr.length === 0
  // }
}
