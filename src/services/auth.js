import axios from "axios";
import { jwtDecode } from "jwt-decode";

// const api = process.env.NEXT_PUBLIC_API;
const api = process.env.NEXT_API_TOKEN;

export async function login(payload, authLogin) {
  // eksekusi di blok try catch
  console.log("testingggg");
  console.log("Ini authLogin: ", authLogin.username, authLogin.password);
  console.log("yow broo");
  // var basicAuth =
  //   "Basic " + btoa(authLogin.username + ":" + authLogin.password);
  try {
    // const response = await axios.post(`${api}/auth/login`, payload);
    const response = await axios.post(
      `${api}`,
      {},
      // {
      //   withCredentials: true,
      //   headers: {
      //     Accept: "application/json",
      //     "Content-Type": "application/json",
      //   },
      // },
      {
        auth: {
          username: "alif",
          password: "123",
        },
        headers: {
          "Content-Type": "application/json",
          // Add any other headers if needed
        },
      }
    );
    console.log(response);
    return { status: true, token: response.data.token };
  } catch (error) {
    console.log(error);
    return { status: false, error };
  }
}

// jwt-decode untuk mendecode atau membuka enkripsi token untuk mendapatkan data
export const getUsername = (token) => {
  const decodedToken = jwtDecode(token);
  console.log(decodedToken);
  return decodedToken.user;
};
