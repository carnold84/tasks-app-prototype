import { DateTime } from 'luxon';

export const getStartOfDay = (date) => {
  let datetime;

  if (date) {
    datetime = DateTime.fromISO(date);
  } else {
    datetime = DateTime.now();
  }

  return datetime.startOf('day').toString();
};

export const formatTime = (date) => {
  const datetime = DateTime.fromISO(date);

  return datetime.toFormat('HH:mm');
};

export const formatFull = (date, withTime = true) => {
  const datetime = DateTime.fromISO(date);

  if (withTime) {
    return `${datetime.toFormat('ccc, d LLL yyyy')}, ${formatTime(date)}`;
  }

  return DateTime.fromISO(date).toFormat('cccc d LLLL yy');
};

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const formatRelative = (date, withTime = false) => {
  const targetDate = DateTime.fromISO(date);
  const start = DateTime.now().startOf('day');

  const diffInMonths = targetDate.diff(start, 'days');
  diffInMonths.toObject();
  const { days } = diffInMonths.values;

  let formattedDate;
  const time = formatTime(date);

  if (days <= 1) {
    formattedDate = capitalizeFirstLetter(targetDate.toRelativeCalendar());

    if (withTime) {
      formattedDate = `${formattedDate}, ${time}`;
    }
  }

  if (days > 1 && days <= 7) {
    formattedDate = `${targetDate.toFormat('cccc')}`;

    if (withTime) {
      formattedDate = `${formattedDate}, ${time}`;
    }
  }

  if (days > 7) {
    formattedDate = formatFull(date, withTime);
  }

  return formattedDate;
};
