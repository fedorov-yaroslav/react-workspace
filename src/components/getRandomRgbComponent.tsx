export const getRandomRgbComponent = () => {
  return `rgb(${Math.ceil(Math.random() * 256)}, ${Math.ceil(Math.random() * 256)}, ${Math.ceil(Math.random() * 256)})`;
};
