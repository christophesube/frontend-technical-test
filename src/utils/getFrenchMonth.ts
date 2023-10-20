export const getFrenchMonth = (timestamp: number) => {
  const date = new Date(timestamp);
  const month = { month: "long" };
  const frenchMonth = new Intl.DateTimeFormat("fr-FR", month).format(date);
  return frenchMonth;
};
