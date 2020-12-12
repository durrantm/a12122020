const showDayName = (apiDate) => {
  const utcDate = new Date(apiDate);
  const options = {
    weekday: 'long',
    timeZone: 'UTC'
  };
  const localDateString = new Intl.DateTimeFormat('en-US', options).format(utcDate);
  const day = localDateString.substring(0,3);
  return day;
};
showDayName('2020-12-25T02:00:00');
showDayName('2020-12-25T23:00:00');
