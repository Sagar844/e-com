import React from "react";

import CartList from "./CartList";
import { withCart } from "./withProvider";

function CartPage() {
  return (
    <div className="max-w-6xl px-40 py-20 mx-auto mt-5 mb-5 rounded-md shadow-md ml-10 bg-white">
      <CartList />
    </div>
  );
}

export default withCart(CartPage);
