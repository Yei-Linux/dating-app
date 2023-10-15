export const fromTimestampToFormatDate = (timestamp: number) => {
  const template = (timePart: number) => `${timePart}`.padStart(2, '0');
  const date = new Date(timestamp);
  const dd = date.getDate();
  const mm = date.getMonth();
  const yyyy = date.getFullYear();

  const hh = date.getHours();
  const mmmm = date.getMinutes();

  return `${template(dd)}/${template(mm + 1)}/${template(yyyy).slice(
    2,
  )} ${template(hh)}:${template(mmmm)}`;
};
