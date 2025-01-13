const expect = (val1:number) => {
  const toBe = (val2:number) : boolean  => {
    if (val1 === val2) {
      return true;
    } else if (val1 !== val2) {
       throw new Error("Not Equal")
    }
  };

  const notToBe = (val2:number) : boolean => {
    if (val1 !== val2) {
      return true;
    } else if (val1 === val2) {
        throw new Error("Equal")
    }
  };

  return {
    toBe,
    notToBe
  }
};

const output = expect(5).toBe(4);
console.log('OutPut For toBe',output);

const output2 = expect(5).notToBe(5);
console.log('OutPut For notToBe',output2);
