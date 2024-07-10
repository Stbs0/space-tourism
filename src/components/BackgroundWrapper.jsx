import { useLocation } from "react-router-dom";
import getBackgroundClass from "../utilis/getBackgroundClass";
import { Outlet } from "react-router-dom";
const BackgroundWrapper = () => {
  const location = useLocation();
  const backgroundClass = getBackgroundClass(location.pathname);

  return (
    <div className={`min-h-screen bg-cover ${backgroundClass}`}>
      <Outlet />
    </div>
  );
};
export default BackgroundWrapper;
