// Worst Case

function worstflipAndInvertImage(image) {
    // Write your code inside this function only.
    let row = image[i];

    // Reverse the row using a for loop
    for (let j = 0; j < Math.floor(row.length / 2); j++) {
      let temp = row[j];
      row[j] = row[row.length - 1 - j];
      row[row.length - 1 - j] = temp;
    }
    //Flip the values (0 to 1 and 1 to 0) using a for loop
    for (let k = 0; k < row.length; k++) {
      row[k] = row[k] === 0 ? 1 : 0;
    }
  }
  return image;

}

// Best Case

function bestflipAndInvertImage(image) {
    // Write your code inside this function only.
  // Iterate through each row in the image
  for (let row of image) {
    // Reverse the row using the reverse() method
    row.reverse();
    // Flip the values (0 to 1 and 1 to 0) using map() method
    for (let i = 0; i < row.length; i++) {
      row[i] = row[i] === 0 ? 1 : 0;
    }
  }
  return image;

}