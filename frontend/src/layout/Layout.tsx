import React from "react";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return <div className="mx-auto mt-5 w-5/6">{children}</div>;
};

export default Layout;
