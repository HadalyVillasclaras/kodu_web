export const getYearForSelectedQuarter = (selectedQuarterId: string): number => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();

  switch (selectedQuarterId) {
    case 'Q1':
      if (currentMonth > 2) {
        return currentYear + 1;
      }
      break;
    case 'Q2':
      if (currentMonth > 5) {
        return currentYear + 1;
      }
      break;
    case 'Q3':
      if (currentMonth > 8) {
        return currentYear + 1;
      }
      break;
    case 'Q4':
      if (currentMonth > 11) {
        return currentYear + 1;
      }
      break;
    default:
      return currentYear;
  }

  return currentYear;
};
