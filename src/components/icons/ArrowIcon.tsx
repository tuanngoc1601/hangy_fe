import { PropsWithClassName } from "../../types/app";

const ArrowIcon = ({ className }: PropsWithClassName) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      name="arrow-down"
      width="30"
      color="#667085"
      className={className}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m9 6 6 6-6 6"
      ></path>
    </svg>
  );
};

export default ArrowIcon;
