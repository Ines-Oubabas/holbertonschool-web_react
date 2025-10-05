// task_1/dashboard/src/utils.js
export const getCurrentYear = () => new Date().getFullYear();

export const getFooterCopy = (isIndex) =>
  isIndex ? 'Holberton School' : 'Holberton School main dashboard';
