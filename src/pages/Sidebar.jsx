import {
  FaHome,
  FaBell,
  FaShoppingBag,
  FaComments,
  FaWallet,
  FaRegUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";

const Sidebar = () => {
  const navigate = useNavigate();

  const onLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Logout Error:", error.message);
    }
  };

  return (
    <div className="bg-white p-3 flex flex-col items-center space-y-4 rounded-lg shadow-lg h-full">
      <nav className="w-full bg-white flex-grow">
        <ul className="space-y-3">
          {[
            { icon: <FaHome />, label: "Home" },
            { icon: <FaBell />, label: "Notifications" },
            { icon: <FaShoppingBag />, label: "Shop" },
            { icon: <FaComments />, label: "Conversation" },
            { icon: <FaWallet />, label: "Wallet" },
            { icon: <FaRegUser />, label: "My Profile" },
            { icon: <FaCog />, label: "Settings" },
          ].map((item, index) => (
            <li
              key={index}
              className="flex items-center font-gilroy space-x-3 p-2 rounded-lg cursor-pointer transition-all duration-300 hover:bg-gray-200 hover:text-gray-900"
            >
              {item.icon} <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </nav>

      <button
        onClick={onLogout}
        className="w-full flex items-center justify-center space-x-3 bg-white rounded-lg shadow-md text-red-500 p-3 hover:bg-gray-200 transition-all duration-300"
      >
        <FaSignOutAlt /> <span className="font-gilroy">Log out</span>
      </button>
    </div>
  );
};

export default Sidebar;
