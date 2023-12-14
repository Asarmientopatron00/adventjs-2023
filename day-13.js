function calculateTime(deliveries) {
  const available = 25200;
  const expent = deliveries
    .map((delivery) => {
      const [hours, minutes, seconds] = delivery.split(":").map(Number);
      return hours * 3600 + minutes * 60 + seconds;
    })
    .reduce((total, time) => total + time, 0);

  const diff = available - expent;
  const sign = diff > 0 ? "-" : "";

  const hours = Math.floor(Math.abs(diff) / 3600);
  const minutes = Math.floor((Math.abs(diff) % 3600) / 60);
  const seconds = Math.abs(diff) % 60;

  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  return `${sign}${formattedTime}`;
}
