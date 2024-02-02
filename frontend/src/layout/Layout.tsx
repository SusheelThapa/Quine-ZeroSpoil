import React from "react";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="mx-auto mt-5 flex justify-center items-center flex-col">
      {children}
    </div>
  );
};

export default Layout;
