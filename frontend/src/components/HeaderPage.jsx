import React from "react";
import { Link } from "react-router-dom";

const HeaderPage = () => {
  return (
    <>
      <header className="bg-gray-800 text-white flex justify-between  items-center p-6 cursor-pointer">
        <div className="text-2xl">
          <Link to="/">Logo</Link>
        </div>
        <nav>
          <ul className="flex space-x-4 ">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/registar">Registe</Link>r
            </li>
            <li>
              <Link to="/LoginPage">Login</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default HeaderPage;
