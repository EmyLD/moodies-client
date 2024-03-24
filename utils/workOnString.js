const capitalizeFirstLetter = (username) => {
  let firstLetter = username.charAt(0);
  let toCap = firstLetter.toUpperCase();
  let newUsername = `${toCap}${username.slice(1)}`;
  return newUsername;
};

export { capitalizeFirstLetter };
