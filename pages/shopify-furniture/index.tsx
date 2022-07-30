import React from "react";
import Headbar from "../../components/shopify-furniture/Headbar";

type Props = {};

function index({}: Props) {
  return (
    <div className="w-screen h-screen bg-stone-50">
      <Headbar />
    </div>
  );
}

export default index;
