import { useState, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import useOnline from "../utiles/useOnline";
import userContext from "../utiles/userContext";
import { useSelector } from "react-redux";
const Title = () => {
  return (
    <a href="/">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKaOo6QvpGCE3XOtRt-VsIXnfclaPH7OHP2g&s"
        alt="logo"
        // className="logo"
        className="h-20 p-2 m-2"
      />
    </a>
  );
};
const Head = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const isOnline = useOnline();
  const { user } = useContext(userContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <>
      <div className="flex justify-between bg-slate-200">
        <Title />
        <div className="nav-items">
          <ul className="flex justify-center align-middle">
            <li className="p-4">
              {" "}
              <Link to="/">Home </Link>
            </li>

            <li className="p-4">
              <Link to="/about">About Us </Link>
            </li>

            <li className="p-4">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="p-4">
              <Link to="/instamart">Instamart</Link>
            </li>
            <li className="p-4">
              <Link to="/cart"> Cart-{cartItems.length} items</Link>
            </li>
          </ul>
        </div>

        <h2 className="p-4">{isOnline ? "🟢" : "🔴"}</h2>
        <h1 className="p-7 text-red-600 font-bold">{user.name}</h1>
        {isLoggedIn ? (
          <button className="p-4 pb-7" onClick={() => setIsLoggedIn(false)}>
            Log Out
          </button>
        ) : (
          <button className="p-4 pb-7" onClick={() => setIsLoggedIn(true)}>
            Log In
          </button>
        )}
      </div>
    </>
  );
};
export default Head;
