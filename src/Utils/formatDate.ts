export const formatDate = (inpDate: string) => {
  // const date = new Date(inpDate);
  // const formattedDate = date.toLocaleDateString("en-GB");
  const date = new Date(inpDate);
  const formattedDate = date.toISOString().split("T")[0];

  return formattedDate;
};
