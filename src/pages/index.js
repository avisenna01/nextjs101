/*file index js dibuat secara otomatis di folder src/pages.
file ini akan menjadi halaman utama di aplikasi next js*/

import Button from "@/components/atoms/Buttons";

import Card from "@/components/molecules/CardWithChildren";
import { useSelector } from "react-redux";

export default function Home() {
  const isMobileScreen = useSelector((state) => state.screen.isMobileScreen);
  // const isLargeScreen = useSelector((state) => state.screen.isLargeScreen);
  // const { isMobileScreen, isLargeScreen } = useSelector(
  //   (state) => state.screen
  // );
  console.log("is mobile screen: ", isMobileScreen);
  // console.log("is large screen: ", isLargeScreen);

  return (
    <div className="font-poppins p-4 flex justify-center items-center text-black min-h-screen">
      {isMobileScreen ? (
        <h1>ini halaman mobile</h1>
      ) : (
        <h1>ini halaman desktop</h1>
      )}
      <h1>Welcome to Next.js</h1>
      <Button />
      {/* cara menggunakan komponen props*/}

      {!isMobileScreen && (
        <>
          {/* cara menggunakan komponen dengan children*/}

          <Card cardClassName={"p-4"}>
            {/*awal komponen children*/}

            {/* <card></card> = parent*/}
            <h2 className="text-xl font-bold my-3">Card Title</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Card>

          {/* akhir dari komponen children*/}
          <Card cardClassName={"p-2"}>
            <h2 className="text-xl font-bold my-3">Card Title 2</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Card>
        </>
      )}
    </div>
  );
}
