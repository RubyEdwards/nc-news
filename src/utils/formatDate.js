const formatDate = (created_at) => {
  const date = new Date(created_at);
  let min = date.getMinutes();
  let hr = date.getHours();
  const dd = date.getDate();
  const yy = date.getFullYear();
  const mm = date.getMonth() + 1;
  min = min < 10 ? `0${min}` : min;
  hr = hr < 10 ? `0${hr}` : hr;
  return `${hr}:${min} ${dd}/${mm}/${yy}`;
};

export { formatDate };
