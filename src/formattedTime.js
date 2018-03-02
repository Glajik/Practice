const f00 = (n) => n < 10 ? `0${n}` : `${n}`; // eslint-disable-line

const format = (f) => (h, m) => `${f(h)}:${f(m)}`; // eslint-disable-line

const formattedTime = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  return format(f00)(hours, rest);
};

export default formattedTime;
