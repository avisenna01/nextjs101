import Button from "@/components/atoms/Buttons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

/** CardProduct : komponen utama/parent sebagai pembungkus/container untuk beberapa komponen children(Header, Body, & Footer) */
export default function CardProduct({ children }) {
  return (
    <>
      <div className="rounded-lg bg-gradient-to-r from-violet-500 via-blue-500 to bg-sky-600 p-1 shadow-xl">
        <div className="flex flex-col w-full max-w-xs h-full bg-white rounded-lg">
          {children}
        </div>
      </div>
    </>
  );
}

// Header
function Header({ image, link = "#" }) {
  return (
    <Link href={link}>
      <Image
        width={500}
        height={500}
        src={image}
        alt={image}
        className="rounded-t-lg aspect-video object-contain"
      />
    </Link>
  );
}

// Body
function Body({ title, desc, link = "#" }) {
  return (
    <Link href={link}>
      <div className="px-5 pb-5">
        <h3 className="text-3xl font-bold text-slate-900 line-clamp-2 h-[72px] max-h-[72px]">
          {title}
        </h3>
        <p className="mt-3 text-slate-700 text-base text-justify line-clamp-4">
          {desc}
        </p>
      </div>
    </Link>
  );
}

// footer
function Footer({ price, onClick }) {
  return (
    <div className="flex flex-col items-center justify-center px-5 pb-5 mt-auto">
      <span className="text-2xl font-semibold mb-2">Harga : Rp. {price}</span>
      <Button
        size={"w-full"}
        color="bg-blue-500"
        textButton="Buy"
        onClick={onClick}
      />
    </div>
  );
}

// cara export komponen children
CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;
