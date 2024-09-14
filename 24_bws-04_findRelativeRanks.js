// Worst Case

function worstfindRelativeRanks(score) {
    // Write your code inside this function only.
 //create a mapping scores to their original indices
  const scoreMap = {};
  for (i = 0; i < score.length; i++) {
    scoreMap[score[i]] = i;
  }

  //sort the scores in descending order
  const sortedScores = score.slice().sort((a, b) => b - a);

  //initialize new array to store the ranks
  const ranks = new Array(score.length);

  // Assign ranks based on the sorted scores
  for (let i = 0; i < sortedScores.length; i++) {
    const index = scoreMap[sortedScores[i]];
    if (i === 0) {
      ranks[index] = "Gold Medal";
    } else if (i === 1) {
      ranks[index] = "Silver Medal";
    } else if (i === 2) {
      ranks[index] = "Bronze Medal";
    } else {
      ranks[index] = (i + 1).toString();
    }
  }
  return ranks;

}

// Best Case

function bestfindRelativeRanks(score) {
    // Write your code inside this function only.
 //sort scores with their indices
  const sortedScores = score.map((val,index) => [val,index]).sort((a, b) => b[0] - a[0]);

  //initialize new array to store the ranks
  const ranks = new Array(score.length);

  // Assign ranks based on the sorted scores
  for (let i = 0; i < sortedScores.length; i++) {
    const index = sortedScores[i][1];
    if (i === 0) {
      ranks[index] = "Gold Medal";
    } else if (i === 1) {
      ranks[index] = "Silver Medal";
    } else if (i === 2) {
      ranks[index] = "Bronze Medal";
    } else {
      ranks[index] = (i + 1).toString();
    }
  }
  return ranks;
}
