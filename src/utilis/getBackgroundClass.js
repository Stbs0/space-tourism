const getBackgroundClass = (pathname) => {
  switch (pathname) {
    case "/":
      return "bg-home-mobile sm:bg-home-tablet lg:bg-home-desktop  ";
    case "/Destination":
      return "bg-destination-mobile sm:bg-destination-tablet lg:bg-destination-desktop ";
    case "/Crew":
      return "bg-crew-mobile sm:bg-crew-tablet lg:bg-crew-desktop ";
    case "/Technology":
      return "bg-technology-mobile sm:bg-technology-tablet lg:bg-technology-desktop ";
    default:
      return "";
  }
};

export default getBackgroundClass;
