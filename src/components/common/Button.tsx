import clsx from "clsx";
// import { PropsWithClassNameAndChildren } from "../../types/app";

const Button = ({ className, children, action }: {
  className?: string;
  children?: React.ReactNode | undefined;
  action?: () => void;
}) => (
  <button
    className={clsx(
      "text-base bg-[#ee4d2d] rounded-md px-4 py-2 hover:opacity-80 transition ease-in duration-150",
      className
    )}
    onClick={action}
  >
    {children}
  </button>
);

export default Button;
