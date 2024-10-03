import CardProduct from "@/components/molecules/CardProduct";
import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import Button from "@/components/atoms/Buttons";
import BackToTop from "@/components/atoms/Icons/BackToTop";
import { data } from "@/contant/data";
import Image from "next/image";

function ProductsPage() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const footerRef = useRef();
  // useref : hooks dari react yang dipakai untuk membuat referensi ke elemen DOM atau mengakses elemen DOM(elemen/tag HTML)
  const [username, setUserName] = useState("");
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  /** useState : hooks dari react yang memungkinkan kita menambahkan state ke functional component.
   * username : variabel state yang akan menyimpan nilai username
   * setUsername : fungsi yang dipake buat memperbaharui nilai username
   * "" (string kosong dalam useState("")) : nilai awal dari state username
   * ketika setUsername dipanggil dengan nilai baru, react akan me-render ulang komponen dengan nilai state yang baru
   */

  const searchProduct = useMemo(() => {
    return data.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  // useEffect untuk mendapatkan data dari localStorage
  useEffect(() => {
    const getUsername = localStorage.getItem("username");
    if (getUsername) {
      setUserName(getUsername);
    }
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);
  /** useEffect(() => {},[]) : hooks dari react yang memungkinkan kita untuk menambahkan side effect ke functional component
   * useEffect dipakai untuk memperbaharui komponen ketika ada perubahan pada state.
   * [] (array kosong/dependency array) : argumen kedua milik useEffect yang artinya efek ini akan dijalankan sekali
   * saat komponen pertama kali dirender(load).
   * jika username ditemukan di localStorage, ia menggunakan setUsername untuk memperbarui nilai dari state username
   */

  // Event handler untuk logout dan menghapus data dari localstorage
  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    localStorage.removeItem("cart");
    window.location.href = "/login";
  };

  // eventHandler untuk menambahkan produk ke cart
  // eventHandler diganti ke useCallback
  /** UseCallback : hooks yang dipakai untuk menyimpan FUNGSI di cache agar fungsi hanya dijalankan
   * ketika ada perubahan pada nilai fungsi tersebut
   */
  const handleAddToCart = useCallback(
    (id) => {
      // jika ada id yang sama maka akan menambahkan jumlah qty +1
      if (cart.find((item) => item.id === id)) {
        // dia akan mapping dan membongkar itemnya untuk mencari data dengan id yang sama
        setCart(
          cart.map((item) =>
            item.id === id ? { ...item, qty: item.qty + 1 } : item
          )
        );
      } else {
        // kalo data nya cuma 1 maka cuma akan di set satu
        setCart([...cart, { id, qty: 1 }]);
      }
    },
    [cart]
  );

  // useMemo untuk menghitung total harga cart dan menyimpan hasil perhitungannya ke cache
  /** usememo : hooks untuk menyimpan hasil komputasi(perhitungan matematika) di cache
   * agar tidak perlu dijalankan/dihitung ulang ketika tidak ada perubahan.
   * dalam kasus ini, useMemo untuk menyimpan hasil total cart dicache sehingga ketika halaman direfresh,
   * total cart ga di itung ulang kalo nilainya ga berubah
   */
  const cartTotal = useMemo(() => {
    return cart.reduce((total, item) => {
      const product = data.find((product) => product.id === item.id);
      return total + product.price * item.qty;
    }, 0);
  }, [cart]); // <- data yang lagi dipantau perubahannya

  // useEffect untuk menghitung total harga dan menyimpan data cart ke localStorage
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  // useEffect untuk menghandle button backToTop
  useEffect(() => {
    function handleScroll() {
      // footerRef.current.offsetTop untuk ambil nilai offsetTop(posisi vertikal atas/bawah) dari elemen footer yang diakses footerRef
      const footerTop = footerRef.current.offsetTop;
      // window.innerHeight : untuk ambil nilai tinggi objek window(tampilkan viewport tanpa toolbar & scrollbar)
      const viewportHeight = window.innerHeight;
      // window.scrollY : untuk ambil nilai scroll sumbu Y dari objek window(posisi scroll di layar vertikal)
      const scrollPosition = window.scrollY;

      // cek apkaah posisi scroll dilayar sudah mencapai elemen footer
      if (scrollPosition + viewportHeight >= footerTop) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    }

    // event listener untuk ngecek scroll
    // fungsi handleScroll akan dijalankan pada saat event scroll terjadi(pada saat layar discroll)
    window.addEventListener("scroll", handleScroll);

    // kembalikan fungsi yang akan dijalankan saat layar berhenti discroll
    return () => {
      // hapus event listener pada event scroll ketika scroll berhenti
      window.removeEventListener("scroll", handleScroll);
    };
  }, [footerRef]); // <- [footerRef] akan dipantau setiap kali ada perubahan

  // fungsi/eventHandle yang akan dijalankan ketika button di klik
  const handleBackToTop = () => {
    // window.scrollTo L untuk scroll layar keatas dengan smooth animation
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="flex justify-between items-center bg-blue-500 px-5 py-4">
        <h1 className="text-xl">Welcome, {username}</h1>
        <div className="w-[300px]">
          <input
            type="text"
            placeholder="Search..."
            className="py-2 px-4 rounded-full w-[300px]"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              if (e.target.value !== "") {
                setShowSearch(true);
              } else {
                setShowSearch(false);
              }
            }}
          />
          {showSearch && searchProduct.length > 0 && (
            <ul className="absolute bg-white text-black w-[300px] mt-1 py-2 px-3 rounded-lg">
              {searchProduct.map((product) => (
                <li key={product.id} className="my-1 text-black">
                  {product.name}
                </li>
              ))}
            </ul>
          )}
        </div>
        <Button color="bg-red-500" textButton="Logout" onClick={handleLogout} />
      </div>
      <div className="flex px-5 py-4">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-2 uppercase">Products</h1>
          {/* products */}
          <div className="flex flex-wrap gap-4">
            {data.map((item) => (
              <CardProduct key={item.id}>
                <CardProduct.Header image={item.image} />
                <CardProduct.Body title={item.name} desc={item.desc} />
                <CardProduct.Footer
                  price={item.price}
                  onClick={() => {
                    handleAddToCart(item.id);
                  }}
                />
              </CardProduct>
            ))}
          </div>
        </div>
        {/* cart */}
        {cart.length > 0 && (
          <div className="cart w-1/3">
            <h1 className="text-3xl font-bold mb-2 uppercase">Cart</h1>
            <div className="flex flex-col gap-2">
              {cart.map((item) => {
                // logic untuk mencari id di dalam variabel data, kalo id yang di data sama dengan id yang ada di cart maka abmil produknya
                const datas = data.find((data) => data.id === item.id);
                return (
                  <>
                    <div key={item.id} className="flex p-4 border rounded-lg">
                      <Image
                        src={datas.image}
                        alt="cart item"
                        className="max-w-[100px]"
                        width={500}
                        height={500}
                      />
                      <div className="flex justify-between w-full">
                        <div className="flex flex-col justify-between ml-3">
                          <span className="font-bold text-xl">
                            {datas.name}
                          </span>
                          <span className="font-semibold">
                            {(datas.price * item.qty).toLocaleString("id-ID", {
                              style: "currency",
                              currency: "IDR",
                            })}
                          </span>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                          <span className="mb-1">Qty</span>
                          <span className="flex-justify-center items-center font-semibold p-2 border rounded-sm text-center w-10 h-10">
                            {item.qty}
                          </span>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="flex justify-between px-4 py-2 border mt-2">
              <span className="font-semibold">total</span>
              <span className="font-semibold">
                {cartTotal.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}
              </span>
            </div>
          </div>
        )}
      </div>
      {showBackToTop && (
        <div
          onClick={handleBackToTop}
          className="fixed bottom-20 right-5 bg-blue-600 p-2 rounded-full"
        >
          <BackToTop />
        </div>
      )}
      <footer
        ref={footerRef}
        className="text-center p-5 bg-gray-800 text-white w-full"
      >
        Copyright by Danu
      </footer>
    </>
  );
}

export default ProductsPage;
