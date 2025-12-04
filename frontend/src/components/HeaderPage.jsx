import { useUser } from "@/hooks/useUser";
import React from "react";
import { Link } from "react-router-dom";

const HeaderPage = () => {

  const {user,logout}=useUser();
  return (
    <>
      <header className="bg-gray-800 text-white flex justify-between  items-center p-6 cursor-pointer">
        <div className="text-2xl">
          <Link to="/">Logo</Link>
        </div>
        <nav>
          <ul className="flex space-x-4 ">
            { user ?
            <>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/Dashboard">Dashboard</Link></li>
              <li><span className="text-lg font-bold text-green-500">Welcome {user?.username}</span></li>
              <button onClick={()=>logout()}>Logout</button>
            </>
            :
            <>
              <li> <Link to="/registar">Registe</Link> </li>
              <li><Link to="/LoginPage">Login</Link> </li>
            </>
              }
          </ul>
        </nav>
      </header>
    </>
  );
};

export default HeaderPage;
