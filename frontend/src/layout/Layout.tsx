import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Layout = ({ children, className }: Props) => {
  return (
    <div className={`${className} mx-auto mt-5 w-5/6`}>{children}</div>
  );
};

export default Layout;
