import React from "react";
import Welcome from "./Welcome";

type AuthLayoutType = {
  children: React.ReactNode;
};

function AuthLayout({ children }: AuthLayoutType) {
  return (
    <div className="w-full min-h-screen flex items-center">
      <div className="w-full md:w-[50%] min-h-screen">{children}</div>
      <Welcome />
    </div>
  );
}

export default AuthLayout;
