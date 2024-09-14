// Worst Case

function worstasteroidCollision(arr) {
    // Write your code inside this function only.
const stack = [];

    for (const asteroid of asteroids) {
        // Keep track of whether the current asteroid survives or explodes
        let survived = true;
        
        // Handle collision with asteroids moving towards each other
        while (stack.length > 0 && asteroid < 0 && stack[stack.length - 1] > 0) {//[5, 10, -5];
            // Check the sizes of the asteroids
            if (Math.abs(asteroid) > stack[stack.length - 1]) {
                // Current asteroid explodes if it's larger
                stack.pop();
            } else if (Math.abs(asteroid) === stack[stack.length - 1]) {
                // Both asteroids disintegrate if they're the same size
                stack.pop();
                survived = false;
                break;
            } else {
                // Current asteroid explodes if it's smaller
                survived = false;
                break;
            }
        }
        
        // Add the asteroid to the stack if it survived
        if (survived) {
            stack.push(asteroid);
        }
    }
    
    return stack;

}

// Best Case

function bestasteroidCollision(arr) {
    // Write your code inside this function only.
  const stack = [];
  for (const asteroid of asteroids) {
    let survived = true;

    while (stack.length > 0 && asteroid < 0 && stack[stack.length - 1] > 0) {
      const currentAsteroid = Math.abs(asteroid);
      const previousAsteroid = Math.abs(stack[stack.length - 1]);
      if (currentAsteroid < previousAsteroid) {
        //current asteroid explodes
        survived = false;
        break;
      } else if (currentAsteroid > previousAsteroid) {
        //previous explodes
        stack.pop();
      } else {
        stack.pop();
        survived = false;
        break;
      }
    }
    if (survived) {
      stack.push(asteroid);
    }
  }
  return stack;

}
