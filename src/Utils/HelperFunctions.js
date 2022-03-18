export const secondsToMinutes = (time) => {
  if (time) {
    let totalMinutes = Math.floor(time / 60);
    let totalSeconds = time % 60;
    return `${totalMinutes}:${totalSeconds}`;
  } else {
    return "";
  }
};
