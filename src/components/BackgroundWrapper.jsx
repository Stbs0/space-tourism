import { useLocation } from "react-router-dom";
import getBackgroundClass from "../utilis/getBackgroundClass";
import { Outlet } from "react-router-dom";
const BackgroundWrapper = () => {
  const location = useLocation();
  const backgroundClass = getBackgroundClass(location.pathname);
  // Todo: make the transtion smooth between pages
  return (
    <div className={`min-h-screen bg-cover flex flex-col   ${backgroundClass}`}>
      <Outlet />
    </div>
  );
};
export default BackgroundWrapper;
