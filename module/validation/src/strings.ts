function Hebrew_English(input: string): boolean {
  // Regular expression to match Hebrew, English, numbers, and special characters
  const regex: RegExp =
    /^[A-Za-z0-9\u0590-\u05FF\s!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~]*$/;

  // Test if the input matches the regex pattern
  return regex.test(input);
}

export { Hebrew_English as He_Eng };
