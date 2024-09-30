import Login from "@/components/organism/Login";
import AuthLayout from "@/components/templates/AuthLayout";
import React from "react";

const LoginPage = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <AuthLayout title={"Login"} desc={"Hi Please login to your account"}>
          <Login />
        </AuthLayout>
      </div>
    </>
  );
};

export default LoginPage;
