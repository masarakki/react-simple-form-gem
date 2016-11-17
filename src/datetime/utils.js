const dayOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const isLeapYear = (year) => {
  return year % 400 == 0 || (year % 100 !== 0 && year % 4 == 0);
};

const getDaysInMonth = (year, month) => {
  month = Number(month);
  if (month !== 1) {
    return dayOfMonth[month];
  }
  if(isLeapYear(Number(year))) {
    return 29;
  }
  return 28;
};

export default { getDaysInMonth, isLeapYear };
