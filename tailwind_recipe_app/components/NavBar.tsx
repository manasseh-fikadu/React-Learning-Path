import Image from "next/image";
import Link from "next/link";
import React from "react";

// Navbar component
const NavBar: React.FC = () => {
  const [modalOpen, setModalOpen] = React.useState(false);

  return (
    <div className="sticky top-0 z-20 py-5 bg-orange-600">
      <div className="lg:max-w-screen-xl mx-auto sm:px-0 sm:max-w-screen-sm px-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="font-bold text-xl lg:text-3xl space-x-2">
            <span className="text-white font-serif">Recipe App</span>
          </h1>
        </div>
        {/* Navigation Links and Mobile Menu */}
        <div className="space-x-5 lg:text-xl flex items-center">
          <Link
            className="hover:text-slate-200 sm:inline-flex hidden text-white font-heading"
            href="/"
          >
            Home
          </Link>
          <Link
            className="hover:text-slate-200 sm:inline-flex hidden text-white font-heading"
            href="/recipes"
          >
            Recipes
          </Link>
          {/* Mobile Menu Button */}
          <button
            className="sm:hidden inline-flex"
            onClick={() => setModalOpen(true)}
          >
            <Image
              src="/menu.png"
              alt="menu icon"
              width={30}
              height={30}
              className="w-full h-full"
            />
          </button>
        </div>
      </div>
      {/* Mobile Menu Overlay */}
      {modalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-[#2a5846] bg-opacity-50 z-50">
          <div className="bg-orange-600 w-4/5 h-full absolute top-0 right-0 shadow-lg">
            {/* Close Button */}
            <div className="flex justify-between items-center px-5 py-3 border-b">
              <button onClick={() => setModalOpen(false)}>
                <Image
                  src="/close.png"
                  alt="close icon"
                  width={30}
                  height={30}
                  className="w-full h-full"
                />
              </button>
            </div>
            {/* Mobile Menu Links */}
            <div className="flex flex-col justify-center items-center space-y-5 py-5">
              <Link onClick={() => setModalOpen(false)} href="/">
                <span className="text-xl font-bold text-white">Home</span>
              </Link>
              <Link onClick={() => setModalOpen(false)} href="/recipes">
                <span className="text-xl font-bold text-white">Recipes</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
