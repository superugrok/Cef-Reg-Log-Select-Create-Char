export const getLocalTime = () => {
  const date = new Date();
  const time = date.getHours();
  return time <= 5 || time >= 22 ? "night" : "day";
};
