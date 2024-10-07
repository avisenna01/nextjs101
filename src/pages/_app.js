// import { setIsLargeScreen, setIsMobileScreen } from "@/redux/screen/action";
// import store from "@/redux/store";
// import store from "@/store/store";
// import { setIsMobileScreen } from "@/store/screen/screenSlice";
import { isMobileScreenAtom } from "@/jotai/atoms";
import "@/styles/globals.css";
// import { Provider } from "react-redux";
import { useEffect } from "react";
import { useSetAtom } from "jotai";

export default function App({ Component, pageProps }) {
  // useSetAtom untuk memperbarui nilai state
  const setIsMobileScreen = useSetAtom(isMobileScreenAtom);
  useEffect(() => {
    function handleResize() {
      // store.dispatch : untuk mentrigger perubahan/pembaruan nilai pada state
      // store.dispatch(setIsMobileScreen(window.innerWidth < 768));
      // store.dispatch(setIsLargeScreen(window.innerWidth >= 768));
      setIsMobileScreen(window.innerWidth < 768);
    }
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsMobileScreen]);
  return (
    // <Provider store={store}>
    <Component {...pageProps} />
    // </Provider>
  );
}
