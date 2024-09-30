import { ReactNode, useEffect, useRef } from "react";

const Dropdown = ({
  children,
  setIsOpenDropdown,
}: {
  children: ReactNode;
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
  return <div ref={dropdownRef}>{children}</div>;
};

export default Dropdown;
