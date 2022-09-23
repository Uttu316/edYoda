import { useSelector } from "react-redux";

const useAuth = () => {
  const token = useSelector((state) => state.profile.token);
  return Boolean(token);
};

export default useAuth;
