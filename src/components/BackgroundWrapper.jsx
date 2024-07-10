import { useLocation } from "react-router-dom";
import getBackgroundClass from "../utilis/getBackgroundClass";
import { Outlet } from "react-router-dom";
const BackgroundWrapper = () => {
  const location = useLocation();
  const backgroundClass = getBackgroundClass(location.pathname);
// Todo: make the transtion smooth between pages
  return (
    <div className={`min-h-screen bg-cover transition-all duration-300 ${backgroundClass}`}>
      <Outlet />
    </div>
  );
};
export default BackgroundWrapper;
