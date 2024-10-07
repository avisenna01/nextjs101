import { SET_IS_MOBILE_SCREEN, SET_IS_LARGE_SCREEN } from "./constant";

/** file action : objek yang mendeskripsikan perubahan yang ingin dilakukan pada state
 * atau sederhananya action seperti sebuah PERINTAH yang akan dikirimkan ke reducer */

// fungsi setIsMobileScreen ini disebut sebagai action creator
export const setIsMobileScreen = (isMobile) => ({
  type: SET_IS_MOBILE_SCREEN, // type: menentukan jenis action yang diterima dari constant
  payload: isMobile, // payload : nilai yang diperbaharui ketika action dijalankan
});

export const setIsLargeScreen = (isLarge) => ({
  type: SET_IS_LARGE_SCREEN, // type: menentukan jenis action yang diterima dari constant
  payload: isLarge, // payload : nilai yang diperbaharui ketika action dijalankan
});
