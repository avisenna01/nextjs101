/*file index js dibuat secara otomatis di folder src/pages.
file ini akan menjadi halaman utama di aplikasi next js*/

import Button from "@/components/atoms/Buttons";
import CardProduct from "@/components/molecules/CardProduct";
import Card from "@/components/molecules/CardWithChildren";
import { isMobileScreenAtom } from "@/jotai/atoms";
import { useAtom } from "jotai";
import { getEvents } from "@/services/events";
import { useState, useEffect } from "react";

export default function Home({ events }) {
  // panggil state isMobileScreen dari jotai yang udah diset secara global
  const [isMobileScreen, setIsMobileScreen] = useAtom(isMobileScreenAtom);
  // dibawah ini state biasa
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobileScreen(window.innerWidth < 768);
      setIsLargeScreen(window.innerWidth >= 1240);
    }
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsMobileScreen]);
  console.log(isMobileScreen, isLargeScreen);
  console.log(events);

  return (
    <div className="font-poppins p-4 flex justify-center items-center text-black min-h-screen">
      {isMobileScreen ? (
        <h1>ini halaman mobile</h1>
      ) : (
        <h1>ini halaman desktop</h1>
      )}
      <Button />
      {events.map((item) => (
        <CardProduct key={item.id}>
          <CardProduct.Body title={item.title} desc={item.participant} />
          {item.location}
        </CardProduct>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const [eventResult] = await Promise.all([getEvents()]);

    return {
      props: {
        events: eventResult?.content,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
