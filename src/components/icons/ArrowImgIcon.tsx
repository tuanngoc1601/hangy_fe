import { PropsWithClassName } from "../../types/app";

const ArrowImgIcon = ({ className }: PropsWithClassName) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 13 20"
    view-box="0 0 13 20"
    x="0"
    y="0"
    height="21"
    width="13"
    fill="white"
    className={className}
  >
    <polygon points="4.2 10 12.1 2.1 10 -.1 1 8.9 -.1 10 1 11 10 20 12.1 17.9"></polygon>
  </svg>
);

export default ArrowImgIcon;
