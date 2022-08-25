/** @format */

import React from "react";
import Product from "./products";
import New from "./news";
export default function Connect() {
  return (
    <>
      <div className='contents'>
        <div className=' mt-16 mx-32 mb-8'>
          <Product />
        </div>
        <New />
      </div>
    </>
  );
}
