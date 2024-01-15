const today: Date = new Date();
const options: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
};
export const formattedDate: string = today.toLocaleDateString("en-US", options);
