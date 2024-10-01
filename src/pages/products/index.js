import CardProduct from "@/components/molecules/CardProduct";
import React, { useState, useEffect } from "react";
import Button from "@/components/atoms/Buttons";

const data = [
  {
    id: 1,
    image: "images/odeng.jpg",
    name: "Odeng 1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eius rerum doloribus aliquid sint cum exercitationem illum repellat fugiat, doloremque ducimus perferendis. Magni porro nobis itaque ipsa illo labore at.",
    price: 25000,
  },
  {
    id: 2,
    image: "images/odeng.jpg",
    name: "Odeng 2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eius rerum doloribus aliquid sint cum exercitationem illum repellat fugiat, doloremque ducimus perferendis. Magni porro nobis itaque ipsa illo labore at.",
    price: 25000,
  },
  {
    id: 3,
    image: "images/odeng.jpg",
    name: "Odeng 3",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eius rerum doloribus aliquid sint cum exercitationem illum repellat fugiat, doloremque ducimus perferendis. Magni porro nobis itaque ipsa illo labore at.",
    price: 25000,
  },
];

function ProductsPage() {
  const [username, setUserName] = useState("");
  /** useState : hooks dari react yang memungkinkan kita menambahkan state ke functional component.
   * username : variabel state yang akan menyimpan nilai username
   * setUsername : fungsi yang dipake buat memperbaharui nilai username
   * "" (string kosong dalam useState("")) : nilai awal dari state username
   * ketika setUsername dipanggil dengan nilai baru, react akan me-render ulang komponen dengan nilai state yang baru
   */
  useEffect(() => {
    const getUsername = localStorage.getItem("username");
    if (getUsername) {
      setUserName(getUsername);
    }
  }, []);
  /** useEffect(() => {},[]) : hooks dari react yang memungkinkan kita untuk menambahkan side effect ke functional component
   * useEffect dipakai untuk memperbaharui komponen ketika ada perubahan pada state.
   * [] (array kosong/dependency array) : argumen kedua milik useEffect yang artinya efek ini akan dijalankan sekali
   * saat komponen pertama kali dirender(load).
   * jika username ditemukan di localStorage, ia menggunakan setUsername untuk memperbarui nilai dari state username
   */

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };
  return (
    <>
      <div className="flex justify-between items-center bg-blue-500 px-5 py-4">
        <h1 className="text-xl">Welcome, {username}</h1>
        <Button color="bg-red-500" textButton="Logout" onClick={handleLogout} />
      </div>
      <div className="flex justify-center items-center min-h-screen gap-4">
        <CardProduct>
          <CardProduct.Header image={"images/odeng.jpg"} />
          <CardProduct.Body
            title={"Title Product"}
            desc={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eius rerum doloribus aliquid sint cum exercitationem illum repellat fugiat, doloremque ducimus perferendis. Magni porro nobis itaque ipsa illo labore at."
            }
          />
          <CardProduct.Footer price={"25.000"} />
        </CardProduct>
        {data.map((item) => (
          <CardProduct key={item.id}>
            <CardProduct.Header image={item.image} />
            <CardProduct.Body title={item.name} desc={item.desc} />
            <CardProduct.Footer price={item.price} />
          </CardProduct>
        ))}
      </div>
    </>
  );
}

export default ProductsPage;
