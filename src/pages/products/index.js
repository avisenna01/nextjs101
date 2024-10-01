import CardProduct from "@/components/molecules/CardProduct";
import React from "react";

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
  return (
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
  );
}

export default ProductsPage;
