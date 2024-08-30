import clsx from "clsx";
import { PropsWithClassNameAndChildren } from "../../types/app";

export default function Container({
  className,
  children,
}: PropsWithClassNameAndChildren) {
  return (
    <main
      className={clsx(
        "mx-auto w-full px-8 flex flex-col items-center justify-center mt-[75px]",
        className
      )}
    >
      {children}
    </main>
  );
}
