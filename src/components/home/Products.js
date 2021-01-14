import React from "react";
import Product from "./Product";

function Products() {
  const products = [
    {
      kind: "Brandy",
      name: "Bacardi 151",
      price: "$49.00",
    },
    {
      kind: "Gin",
      name: "Jim Beam Kentucky Straight",
      price: "$79.00",
    },
    {
      kind: "Rum",
      name: "Citadelle",
      price: "$69.00",
    },
    {
      kind: "Rum",
      name: "The Glenlivet",
      price: "$500.00",
    },
    {
      kind: "Whiskey",
      name: "Black Label",
      price: "$149.00",
    },
    {
      kind: "Teqilla",
      name: "Macallan",
      price: "$128.60",
    },
    {
      kind: "Vodka",
      name: "Old Monk",
      price: "$166.00",
    },
    {
      kind: "Whiskey",
      name: "Jameson Irish Whiskey",
      price: "$99.00",
    },
  ];

  const renderedProducts = products.map((product, index) => (
    <Product
      kind={product.kind}
      name={product.name}
      price={product.price}
      image={index + 1}
    />
  ));

  return (
    <>
      <p className="title-intro">Our Delightful Offering</p>
      <h2 className="title">Tastefully Yours</h2>
      <div className="products">{renderedProducts}</div>
    </>
  );
}

export default Products;
