// External library
import { useEffect, useRef, useState } from "react";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";

// Components
import DropdownMenu from "./subcomponents/Dropdown";

// Styles
import styles from "./styles.module.css";

// Types
import type { NavigationList } from "../../types";

export default function Mobile({ links }: NavigationList) {
  const [openMenu, setOpenMenu] = useState(false);
  const dropdownMenu = useRef<HTMLDivElement>(null);

  const handleMenuState = () => {
    setOpenMenu((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownMenu.current &&
      !dropdownMenu.current.contains(event.target as Node)
    )
      setOpenMenu(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <div className={styles.sandwich} ref={dropdownMenu}>
      {openMenu ? (
        <IoCloseOutline size="2rem" onClick={handleMenuState} />
      ) : (
        <IoMenuOutline size="2rem" onClick={handleMenuState} />
      )}
      <DropdownMenu links={links} isOpen={openMenu} />
    </div>
  );
}
