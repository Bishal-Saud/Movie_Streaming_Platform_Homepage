import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";

const NavList = ({ url, title }) => {
  return (
    <Link
      className="mx-5 font-thin text-xl text-stone-300 hover:text-yellow-300"
      to={url}
    >
      {title}
    </Link>
  );
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`bg-blend-darken bg-gray-900 text-white py-3 px-2 fixed z-10 w-full`}
    >
      <div className="flex justify-between items-center">
        <Logo />
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>
        <div className="hidden md:flex">
          <NavList url={"/"} title={"Home"} />
          <NavList url={"/filmes"} title={"Filmes"} />
          <NavList url={"/series"} title={"Series"} />
        </div>
        <div className="hidden md:flex h-10 w-10 bg-yellow-300 rounded-full text-black items-end justify-center">
          <FaUser className="text-4xl" />
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col items-center">
          <NavList url={"/"} title={"Home"} />
          <NavList url={"/filmes"} title={"Filmes"} />
          <NavList url={"/series"} title={"Series"} />
          <div className="h-10 w-10 bg-yellow-300 rounded-full text-black flex items-center justify-center mt-4">
            <FaUser className="text-2xl" />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
