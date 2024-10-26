import clsx from "clsx";
import { PropsWithClassNameAndChildren } from "../../types/app";

export default function Container({
  className,
  children,
}: PropsWithClassNameAndChildren) {
  return (
    <main
      className={clsx(
        "mx-auto w-full sm:px-8 xs:px-4 flex flex-col items-center justify-center mt-[75px] max-w-[1300px]",
        className
      )}
    >
      {children}
    </main>
  );
}
