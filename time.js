let today = new Date();
let dayOfWeek = today.getDay();
let date = today.toLocaleDateString();
let time = today.toLocaleTimeString();
let dateTime = '';

switch (dayOfWeek) {
  case 0:
    dateTime += 'Sunday, ';
    break;
  case 1:
    dateTime += 'Monday, ';
    break;
  case 2:
    dateTime += 'Tuesday, ';
    break;
  case 3:
    dateTime += 'Wednesday, ';
    break;
  case 4:
    dateTime += 'Thursday, ';
    break;
  case 5:
    dateTime += 'Friday, ';
    break;
  case 6:
    dateTime += 'Saturday, ';
    break;
}

dateTime += date + ' ' + time;
console.log(dateTime);
