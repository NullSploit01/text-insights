const countLines = (textInput: string | null) => {
  if (textInput) {
    let lines = textInput.split(/\n/);
    lines = lines.filter((line) => {
      return line != "";
    });
    return lines.length;
  } else {
    return 0;
  }
};

export { countLines };
