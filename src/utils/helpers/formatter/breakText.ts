export const breakText = (phrase: string, breakElement: string = "\n") => {
  return phrase.split(breakElement);
};

export default breakText;
