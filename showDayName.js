showDayName = (apiDate) => {
  const utcDate = new Date(apiDate);
  const localDateString = String(new Date(utcDate));
  const day = localDateString.substring(0,3);
  return day;
};
showDayName('2020-12-25T02:00:00');
showDayName('2020-12-25T23:00:00');
