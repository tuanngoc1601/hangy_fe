import type { SVGProps } from "react";

const ShoppingCart = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 26.6 25.6"
      width={26}
      height={26}
      className="text-black"
      {...props}
    >
      <title>Shopping Cart Icon</title>
      <polyline
        fill="none"
        points="2 1.7 5.5 1.7 9.6 18.3 21.2 18.3 24.6 6.1 7 6.1"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="2.5"
      ></polyline>
      <circle cx="10.7" cy="23" r="2.2" stroke="none"></circle>
      <circle cx="19.7" cy="23" r="2.2" stroke="none"></circle>
    </svg>
  );
};

export default ShoppingCart;
