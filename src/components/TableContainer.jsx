import React from "react";

const TableContainer = ({ children }) => {
  return (
    <div className="w-full overflow-x-auto">
      {children}
    </div>
  );
};

export default TableContainer;