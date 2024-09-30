import { ReactNode, useEffect, useRef } from "react";

const Dropdown = ({
  children,
  className,
  setIsOpenDropdown,
}: {
  children: ReactNode;
  className?: string;
  setIsOpenDropdown: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpenDropdown(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div ref={dropdownRef} className={className}>
      {children}
    </div>
  );
};

export default Dropdown;
