import axios from "axios";

const api = process.env.NEXT_PUBLIC_API;

// export fungsi getProducts yang mengembalikan data produk dari API
export async function getProducts() {
  // eksekusi di blok try catch
  try {
    // untuk request GET ke URL API produk menggunakan axios kemudian tampung hasilnya di variable response
    // const response = await axios.get("https://fakestoreapi.com/products");
    const response = await axios.get(`${api}/products`);
    // kembalikan data produk dari response jika berhasil
    return response.data;
  } catch (error) {
    // error jika gagal mengambil data dari API
    console.log(error);
  }
}

export async function getProductById(id) {
  try {
    const response = await axios.get(`${api}/products/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
