import React from "react";
import Loading from "../assets/loading.gif";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-96">
      {/* Displaying loader gif until response is recieved */}
      <img
        src={Loading}
        alt="Loading..."
        height={140}
        width={140}
      />
    </div>
  );
};

export default Loader;
