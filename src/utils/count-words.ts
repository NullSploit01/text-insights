const countWords = (textInput: string | null) => {
  if (typeof textInput === "string") {
    const textArray = textInput.split(" ");
    return textArray.filter((word) => word !== "").length;
  } else {
    return 0;
  }
};

export { countWords };
