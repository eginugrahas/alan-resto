import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header className="w-full">
            <div className="bg-primary py-2 px-[10%]">
                <div className="">
                    <a
                        className="text-white text-2xl font-bold flex items-center gap-4"
                        href="#"
                    >
                        <i className="icon-storefront text-4xl"></i>
                        Alan Resto
                    </a>
                </div>
            </div>
            <div className="flex gap-10 items-center border-b border-b-gray-400 bg-white px-[10%]">
                <NavLink to="/food" className="text-xl font-semibold">
                    Food
                </NavLink>
                <NavLink to="/" className="text-xl font-semibold py-2">
                    Transaction
                </NavLink>
            </div>
        </header>
    );
}

export default Header;
