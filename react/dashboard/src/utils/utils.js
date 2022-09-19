export const getUserId = () => {
  const searchQuery = window.location.search;
  const searchObj = new URLSearchParams(searchQuery);
  const userId = Number(searchObj.get("profile_id"));
  return userId;
};

export const validatePassword = (value) => {
  if (value.length < 8) {
    return "Password is too short";
  }
  return "";
};
