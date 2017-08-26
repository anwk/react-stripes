export const getRandomNotRedRgbColor = () => {
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `rgb(0,${green},${blue})`;
};

export const RBG_WHITE = 'rgb(255,255,255)';
export const RBG_RED = 'rgb(255, 99, 71)';