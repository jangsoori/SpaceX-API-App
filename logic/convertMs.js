export default function convertMiliseconds(miliseconds, format) {
  let days, hours, minutes, seconds, totalHours, totalMinutes, totalSeconds;

  totalSeconds = parseInt(Math.floor(miliseconds / 1000));
  totalMinutes = parseInt(Math.floor(totalSeconds / 60));
  totalHours = parseInt(Math.floor(totalMinutes / 60));
  days = parseInt(Math.floor(totalHours / 24));

  seconds = parseInt(totalSeconds % 60);
  minutes = parseInt(totalMinutes % 60);
  hours = parseInt(totalHours % 24);

  switch (format) {
    case "s":
      return totalSeconds;
    case "m":
      return totalMinutes;
    case "h":
      return totalHours;
    case "d":
      return days;
    default:
      return { d: days, h: hours, m: minutes, s: seconds };
  }
}
