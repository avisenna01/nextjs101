import Link from "next/link";
import React from "react";

const AuthLayout = ({ title, desc, children, type = "login" }) => {
  return (
    <>
      <div className="rounded-lg bg-gradient-to-r from-violet-500 via-blue-600 bg-sky-600 p-1 shadow-xl">
        <div className="max-w-xs border rounded-lg p-8 bg-white">
          <h1 className="text-3xl font-bold mb-2 text-blue-500">{title}</h1>
          <p className="font-medium text-slate-500 mb-4">{desc}</p>
          {children}
          {/*conditional rendering*/}
          {type === "login" ? (
            <p className="text-sm text-center mt-2">
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="text-blue-500 hover:text-blue-700"
              >
                Register
              </Link>
            </p>
          ) : (
            <p className="text-sm text-center mt-2">
              Already have an account?{" "}
              <Link href="/login" className="text-blue-500 hover:text-blue-700">
                Login
              </Link>
            </p>
          )}
          {/*conditional rendering pake && (operator)*/}
          <p className="text-sm text-center mt-2">
            {type === "login"
              ? "Don't have an account? "
              : "Already have an account?"}
            {type === "login" && (
              <Link
                href="/register"
                className="text-blue-500 hover:text-blue-700"
              >
                Register
              </Link>
            )}
            {type === "register" && (
              <Link href="/login" className="text-blue-500 hover:text-blue-700">
                Login
              </Link>
            )}
          </p>
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
/**conditional rendering: teknik yang dipake untuk menampilkan atau menyembunyikan elemen UI
 * berdasarkan kondisi tertentu seperti contoh diatas
 */
