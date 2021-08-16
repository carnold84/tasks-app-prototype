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

export const formatFull = (date, withTime = true) => {
  const datetime = DateTime.fromISO(date);

  if (withTime) {
    return `${datetime.toFormat('h:mm a')} on ${datetime.toFormat(
      'cccc d LLLL yy'
    )}`;
  }

  return DateTime.fromISO(date).toFormat('cccc d LLLL yy');
};

export const formatRelative = (date) => {
  const targetDate = DateTime.fromISO(date);
  const start = DateTime.now().startOf('day');

  const diffInMonths = targetDate.diff(start, 'days');
  diffInMonths.toObject();
  const { days } = diffInMonths.values;

  let formattedDate;

  if (days <= 3) {
    formattedDate = `Due ${targetDate.toRelativeCalendar()}`;
  }

  if (days > 3 && days <= 7) {
    formattedDate = `${targetDate.toFormat('cccc')}`;
  }

  if (days > 7) {
    formattedDate = `${targetDate.toFormat('ff')}`;
  }

  return formattedDate;
};
