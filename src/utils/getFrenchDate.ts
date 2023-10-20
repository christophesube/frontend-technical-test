export const getFrenchDate = (timestamp: number) => {
  const date = new Date(timestamp);
  const hour = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };
  const frenchHour = new Intl.DateTimeFormat("fr-FR", hour).format(date);
  return frenchHour;
};
