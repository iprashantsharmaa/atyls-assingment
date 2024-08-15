export const noop = () => {};

export const isValidEmail = (email?: string) => {
  if (!email) {
    return false;
  }
  const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  return emailRegex.test(email);
};
