// contains helper functions

const randInt = (min = 0, max = 1) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const randColor = ({ greyish = 0 } = {}) => {
  const generateComponent = (base, factor) =>
    Math.floor(base + (128 - base) * (1 - factor));

  const red = generateComponent(randInt(0, 255), greyish);
  const green = generateComponent(randInt(0, 255), greyish);
  const blue = generateComponent(randInt(0, 255), greyish);
  console.log(`rgb(${red},${green},${blue})`);
  return `rgb(${red},${green},${blue})`;
};

const randFloat = (value) => {
  return value * Math.random();
};

/* const randInt = (min = 0, max = 1) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const randColor = ({ 
  whitiesh = 0, 
  greyish = 0, 
  blueish = 0
} = {}) => {

    let red = randInt(0, 255 * (1 - blueish));
    let green = randInt(0, 255 * (1 - blueish));
    let blue = randInt(200, 255 * (1 - blueish)); 

    red = Math.floor(red + (128 - red) * (1 - greyish));
    green = Math.floor(green + (128 - green) * (1 - greyish));
    blue = Math.floor(blue + (128 - blue) * (1 - greyish));

    return `rgb(${red},${green},${blue})`;
};

const randFloat = (value) => {
  return value * Math.random();
}; */

/* const randInt = (min=0,max=1) => {
  return Math.floor(
    Math.random()*(max -min) + min
  )
}

const randColor = ({ whitiesh = 1, greyish = 1, blueish = 1 } = {}) => {
  let white = randInt(0, 255 * whitiesh);
  let grey = randInt(0, 255 * greyish);
  let blue = randInt(0, 255 * blueish);

  return `rgb(${white},${grey},${blue})`;
};

const randFloat = (value) => {
  return value * Math.random();
}; */


/* const randInt = (min = 0, max = 1) => {
  return Math.floor(Math.random() * (max - min) + min);
}; */

/* const randColor = ({
  redish = 1,
  greenish = 0,
  blueish = 1,
  greyish = 0,
}={}) => {
  let red = randInt(0,255 * redish)
  let green = randInt(0,255 * greenish)
  let blue = randInt(0,255 * blueish)
  

    red = Math.floor(red + (128 - red) * (1 - greyish));
    green = Math.floor(green + (128 - green) * (1 - greyish));
    blue = Math.floor(blue + (128 - blue) * (1 - greyish));

  return `rgb(${red},${green},${blue})`
}; */

/* const randColor = ({ blueish = 1, greyish = 1 } = {}) => {
  let red = randInt(0 * (1 - greyish));
  let green = randInt(0 * (1 - greyish));
  let blue = randInt(0 * greyish, 255 * blueish); // Adjusted range for blue

  return `rgb(${red},${green},${blue})`;
}; */
/* const randColor = ({ greyish = 1} = {}) => {
  const greyValue = randInt(128 * greyish);
  return `rgb(${greyValue},${greyValue},${greyValue})`;
};

const randFloat = (value) => {
  return value * Math.random()
} */


export {randInt, randColor, randFloat}

