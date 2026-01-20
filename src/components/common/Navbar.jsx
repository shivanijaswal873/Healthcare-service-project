import { useState } from "react";
import logo from "@/assets/Unify-Healthcare-Logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm">
      {/* ================= TOP BAR ================= */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row md:justify-between md:items-center gap-3">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Unify Healthcare" className="h-10 md:h-12" />
        </div>

        {/* Address & Phone (hide on small screens) */}
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <span className="text-red-500">🏠</span>
            <span>353 Middlestone Way Cuyahoga Falls, OH 44223</span>
          </div>
          <div className="flex items-center gap-2 text-red-500 font-semibold">
            <span>📞</span>
            <span>+1 (866) 796-0858</span>
          </div>
        </div>

        {/* Hamburger (mobile only) */}
        <button
          className="md:hidden absolute right-4 top-5 text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      <hr />

      {/* ================= MENU ================= */}
      <nav className="max-w-7xl mx-auto px-4">
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-12 py-6 text-gray-800 font-medium">
          <li className="text-red-500 cursor-pointer">Home</li>
          <li className="cursor-pointer hover:text-red-500">Physician Billing</li>
          <li className="cursor-pointer hover:text-red-500">Services</li>
          <li className="cursor-pointer hover:text-red-500">Global Delivery Model</li>
          <li className="cursor-pointer hover:text-red-500">NZ/AUS Coders</li>
          <li className="cursor-pointer hover:text-red-500">Resources</li>
          <li className="cursor-pointer hover:text-red-500">Company</li>
          <li className="cursor-pointer hover:text-red-500">Contact</li>
        </ul>

        {/* Mobile Menu */}
        {open && (
          <ul className="md:hidden flex flex-col gap-4 py-6 text-gray-800 font-medium">
            <li className="text-red-500">Home</li>
            <li>Physician Billing</li>
            <li>Services</li>
            <li>Global Delivery Model</li>
            <li>NZ/AUS Coders</li>
            <li>Resources</li>
            <li>Company</li>
            <li>Contact</li>

            {/* Mobile contact info */}
            <div className="pt-4 border-t text-sm text-gray-600">
              <p className="flex items-center gap-2 mb-2">
                <span className="text-red-500">🏠</span>
                353 Middlestone Way Cuyahoga Falls, OH 44223
              </p>
              <p className="flex items-center gap-2 text-red-500 font-semibold">
                <span>📞</span>
                +1 (866) 796-0858
              </p>
            </div>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
