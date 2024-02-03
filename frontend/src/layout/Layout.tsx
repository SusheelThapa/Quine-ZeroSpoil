import React from "react";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return <div className="mx-auto mt-5 w-5/6 bg-white">{children}</div>;
};

export default Layout;
