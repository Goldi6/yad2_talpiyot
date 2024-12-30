function isAtLeast18YearsOld(value) {
  //CONFIG: set (remove from here) the minimum registration age
  const MIN_AGE = 18;
  const today = new Date();
  const minDate = new Date(
    today.getFullYear() - MIN_AGE,
    today.getMonth(),
    today.getDate()
  );

  return value >= minDate;
}

module.exports = { isAtLeast18YearsOld };
