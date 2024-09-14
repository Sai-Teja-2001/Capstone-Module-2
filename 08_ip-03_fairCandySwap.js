module.exports = { fairCandySwap };

/*function fairCandySwap(aliceSizes, bobSizes) {
    let sumAlice = 0, sumBob = 0;
    
    for(let i = 0; i < aliceSizes.length; i++) {
        sumAlice += aliceSizes[i];
    }
    
    for(let i = 0; i < bobSizes.length; i++) {
        sumBob += bobSizes[i];
    }
    
    let sum = (sumAlice + sumBob) / 2;
    
    for(let i = 0; i < aliceSizes.length; i++) {
        let a = aliceSizes[i];
        
        let b = sum - (sumAlice - a);
        
        if(bobSizes.includes(b))
            return [a, b];
    }
};*/

//Improvised approach

function fairCandySwap(aliceSizes, bobSizes) {
  let sumAlice = 0,
    sumBob = 0;

  for (let i = 0; i < aliceSizes.length; i++) {
    sumAlice += aliceSizes[i];
  }

  for (let i = 0; i < bobSizes.length; i++) {
    sumBob += bobSizes[i];
  }

  let sum = (sumAlice + sumBob) / 2;

  const bobSet = new Set(bobSizes);
  for (let i = 0; i < aliceSizes.length; i++) {
    let a = aliceSizes[i];

    let b = sum - (sumAlice - a);

    if (bobSet.has(b)) {
      return [a, b];
    }
  }
};
