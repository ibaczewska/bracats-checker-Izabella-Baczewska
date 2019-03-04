const containsOpenCats = (inputValue, openingBracats) => {
  for(let i = 0; i < openingBracats.length; i++){
    if(inputValue.includes(openingBracats[i])) return true
  }
  return false
}

const check = (inputValue) => {
  const openingBracats = ['cat', 'CAT', 'cAt'];
  const closingBracats = ['tac', 'TAC', 'tAc']; 
    if(containsOpenCats(inputValue, openingBracats)) {
      let lastBracat;
      const stack = [];
      
      for (let i = 0; i < inputValue.length; i+=3) {
          let bracat = inputValue.substring(i, i+3);
          let openBracatExists = openingBracats.includes(bracat);
          let closeBracatIdExists = closingBracats.includes(bracat);
  
          if (openBracatExists) {
              stack.push(bracat);
          } else if (closeBracatIdExists) {            
              if (stack.length === 0) return false;
  
              lastBracat = stack.pop();
              let openId = openingBracats.indexOf(lastBracat)
              let closeId = closingBracats.indexOf(bracat)
              if(openId !== closeId) return false;
          }
      }
  
      if (stack.length !== 0) return false;
      return true;     
    }
    return false
}
export {check};
