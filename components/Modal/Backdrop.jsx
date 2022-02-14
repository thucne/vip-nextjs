import React from "react";
const Backdrop = ({ isPopup }) => {
  return (
    <React.Fragment>
      <div
        className={` h-full w-full  fixed top-0 left-0 backdrop-sepia-0 bg-black/30  z-10`}
      ></div>
    </React.Fragment>
  );
};

export default Backdrop;