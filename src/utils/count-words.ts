/* eslint-disable no-useless-escape */
const countWords = (textInput: string | null) => {
  if (typeof textInput === "string") {
    let textArray = textInput.trim().split(/\s+|\.|\,|\?|\;|\:/);
    textArray = textArray.filter((text) => {
      return text !== " " && /[A-Za-z0-9]/.test(text);
    });
    console.log(textArray);

    return textArray.length;
  } else {
    return 0;
  }
};

export { countWords };
