## Fix Safari showing day of week correctly

I have an api date in the format:  2020-12-25T02:00:00'

I need to get the **day of week**

My code works ok in Chrome and most other browsers.
The problem is in Safari which has issues with slightly different date format.

The task is to amend the code and test that it returns "Fri" for all 4 of the test cases below

The existing code and test cases (4th case is failing) is:

    CHROME
    showDayName = (apiDate) => {
    const utcDate = new Date(apiDate);
    const localDateString = String(new Date(utcDate));
    const day = localDateString.substring(0,3);
    return day;
    }
    [Function: showDayName]
    > showDayName('2020-12-25T02:00:00');
    'Fri' //  <-- Works!
    > showDayName('2020-12-25T23:00:00');
    'Fri'  <-- Works!

    SAFARI
    > showDayName('2020-12-25T02:00:00');
    'Fri'  <-- Works!
    > showDayName('2020-12-25T23:00:00');
    'Thu'  <-- issue :(
