import Button from "@/components/atoms/Buttons";
import InputForm from "@/components/molecules/InputForm";
import Link from "next/link";
import React from "react";
import { login } from "@/services/auth";

const Login = () => {
  // buat fungsi handle login
  const handleLogin = async (event) => {
    // event.preventDefault() berfungsi untuk mencegah halaman agar tidak refresh/reload saat fungsi di trigger
    event.preventDefault();
    // console.log("Login");
    // console.log(event.target.username.value);
    // console.log(event.target.password.value);
    // localStorage.setItem : buat nyimpen data dari inputan form ke dalam penyimpanan lokal milik browser
    // localStorage.setItem("username", event.target.username.value);
    // localStorage.setItem("password", event.target.password.value);
    // window.location.href : berfungsi untuk mengarahkan ke halaman lain
    // window.location.href = "/products";

    // payload untuk mengambil data dari input form untuk dikirim ke service
    const payload = {
      username: event.target.username.value,
      password: event.target.password.value,
    };

    // panggil service login
    try {
      const response = await login(payload);
      console.log(response);
      // cek token, klo gaada token bakal diarahkan ke halaman login
      if (response.status) {
        localStorage.setItem("token", response.token);
        window.location.href = "/products";
      } else {
        console.log("Login failed", response);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    // onSubmit : event handler dari form yang menangani aksi ketika form disubmit(melalu button dengan type "submit")
    <form onSubmit={handleLogin} className="flex flex-col gap-4">
      <InputForm
        label="Username"
        name="username"
        type="text"
        placeholder="Masukkan nama"
      />
      <InputForm
        label="Password"
        name="password"
        type="password"
        placeholder="Masukkan password"
      />
      <Button
        // onClick={handleLogin} // onClick : event handler dari button yang menangani event ketika button di klik
        color="bg-blue-500 hover:bg-blue-700"
        size={"w-full"}
        textButton="Submit"
        type={"submit"}
      />
    </form>
  );
};

export default Login;
