import { getUsername } from "@/services/auth";
import React, { useState, useEffect } from "react";

// custom hooks digunakan ketika ada hooks/fungsi yang dipakai berkali-kali dibanyak halaman
const useLogin = () => {
  const [username, setUsername] = useState("");
  useEffect(() => {
    // ambil token yang disimpan di localStorage
    const token = localStorage.getItem("token");
    // cek kalo ada token maka akan ambil nama user dari token yang di decode
    if (token) {
      // kirim nama user tsb ke state username
      setUsername(getUsername(token));
    } else {
      window.location.href = "/login";
    }
  }, []);
  return username;
};

export default useLogin;
