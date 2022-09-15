export const getUserId = () => {
  const searchQuery = window.location.search;
  const searchObj = new URLSearchParams(searchQuery);
  const userId = Number(searchObj.get("profile_id"));
  return userId;
};
