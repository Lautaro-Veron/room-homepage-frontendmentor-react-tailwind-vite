import { useState, useRef } from "react";
import IconMenuOpen from "../icons/IconMenuOpen";
import IconMenuClose from "../icons/IconMenuClose";
import NavLink from "./NavLink";

const NavBar = () => {

    const [activeMenu, setActiveMenu] = useState(false);

    const refNavbar = useRef(null);

    const openMenuClass = "absolute top-10 px-8 flex items-center w-full lg:text-white text-white";

    const closeMenuClass = "absolute top-10 px-8 py-4 text-black flex items-center w-full bg-white justify-between lg:bg-transparent lg:text-white lg:justify-start lg:py-0";

    const handleClickMenu = () => {
        setActiveMenu(!activeMenu);
        //console.log(refNavbar.current.querySelector("#navLinks"));
        refNavbar.current.querySelector("#navLinks").classList.toggle("hidden");
        refNavbar.current.querySelector("#navLinks").classList.add("flex", "gap-8");
        refNavbar.current.querySelector("#navBrand").classList.toggle("hidden");
    };

    return (
        <nav ref={refNavbar} className={activeMenu ? closeMenuClass : openMenuClass}>
            <button className="lg:hidden" onClick={handleClickMenu}>
                {
                    activeMenu ? <IconMenuClose /> : <IconMenuOpen className="lg:hidden" />
                }
            </button>
        <a id="navBrand" href="#" className="mx-auto text-4xl mb-3 pr-[20px] lg:mx-0 lg:pr-16 lg:block">room</a>
        <div className="hidden gap-4 lg:flex lg:text-white" id="navLinks">
            <NavLink text="home" />
            <NavLink text="shop" />
            <NavLink text="about" />
            <NavLink text="contact" />
        </div>
      </nav>
    );
};

export default NavBar;