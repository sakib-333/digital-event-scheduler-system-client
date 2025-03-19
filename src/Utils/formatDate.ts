export const formatDate = (inpDate: string) => {
  const date = new Date(inpDate);
  const formattedDate = date.toLocaleDateString("en-GB");

  return formattedDate;
};
