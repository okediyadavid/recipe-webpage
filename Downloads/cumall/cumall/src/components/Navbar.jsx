import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsFillPencilFill, BsSearch, BsCart2 } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import User from "./User";
import Button from "./ui/Button";
import { useAuthContext } from "../context/AuthContext";
import CartStatus from "./CartStatus";

export default function Navbar() {
  const { user, login, logout } = useAuthContext();
  const { pathname } = useLocation(); // Get the current path
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState(pathname);

  const categories = [
    {
      name: "All",
      urlPath: "/products",
    },
    {
      name: "Stationeries",
      urlPath: "/category/Stationeries",
    },
    {
      name: "Personal Care",
      urlPath: "/category/Personal%20Care",
    },
    {
      name: "Dorm Essentials",
      urlPath: "/category/Dorm%20Essentials",
    },
    {
      name: "Sports & Fitness",
      urlPath: "/category/Sports%20Fitness",
    },
    {
      name: "Electronics",
      urlPath: "/category/Electronics",
    },
  ];

  return (
    <header className="flex flex-col bg-[#F6F2FF] p-4 shadow-md">
      {/* Top Navigation Bar */}
      <div className="flex items-center justify-between bg-white rounded-full px-6 py-3">
        {/* CU Mall Logo */}
        <Link to="/" className="text-2xl font-bold hover:text-green-500">
          CU Mall
        </Link>

        {/* Search Bar */}
        <div className="relative flex-1 mx-6">
          <BsSearch className="absolute left-4 top-3 text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-10 py-2 rounded-full border border-gray-300 focus:outline-none"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-4 top-3 text-gray-500"
            >
              ✕
            </button>
          )}
        </div>

        {/* Cart & Profile Icons */}
        <div className="flex items-center gap-4">
          {user && (
            <Link to="/carts">
              <CartStatus />
            </Link>
          )}
          <div className="relative">
            {user ? (
              <User user={user} />
            ) : (
              <FaUserCircle className="text-2xl text-gray-700 hover:text-black cursor-pointer" />
            )}
          </div>
        </div>
      </div>

      {/* Category Navigation + Login/Signup */}
      <div className="flex justify-between items-center mt-4">
        {/* Category Navigation */}
        <nav className="flex gap-6 text-gray-500">
          {categories.map(({name, urlPath}) => (
            <Link
              key={name}
              to={urlPath}
              onClick={() => setActiveTab(name)}
              className={`text-lg ${
                activeTab === name
                  ? "font-bold text-black underline"
                  : "hover:text-black"
              }`}
            >
              {name}
            </Link>
          ))}
        </nav>

        {/* Login / Logout / Signup Buttons */}
        <div className="flex items-center gap-2">
          {user ? (
            <Button
              onClick={logout}
              className="bg-green-500 text-white px-4 py-2 rounded-full"
            >
              Logout
            </Button>
          ) : (
            <>
              <Link to="/login">
                <Button className="bg-green-500 text-white px-4 py-2 rounded-full">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-green-500 text-white px-4 py-2 rounded-full">
                  Signup
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
