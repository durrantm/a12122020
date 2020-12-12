const showDayName = (apiDate) => {
  const c = new Date(`${apiDate}Z`.replace(/\s+/g, 'T'));
  const timeOffset = new Date().getTimezoneOffset();
  const millisecondOffset = timeOffset*60*1000;
  // add time for all browser compatibility for having uniform UTC
  const utcDate = new Date(c.getTime() + millisecondOffset);
  // now subtract offset time for getting local time
  const localDateString = String(new Date(utcDate.getTime() - millisecondOffset) );
  const day = localDateString.substring(0,3);
  return day;
}
showDayName('2020-12-25T02:00:00');
showDayName('2020-12-25T23:00:00');
