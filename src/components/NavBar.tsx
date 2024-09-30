import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const NavBar = () => {
  const menus: string[] = ["Chicken", "Soup", "Salmon", "Potato", "Vegan"];
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-10 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={logo} className="h-16" alt="Small Image" />
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <NavLink
            className="text-black font-bold py-2 px-4 mx-1 rounded hover:bg-green-300"
            to="/"
          >
            Home
          </NavLink>
          {menus.map((menu) => (
            <NavLink
              to={`/category/${menu}`}
              className="text-black font-bold py-2 px-4 mx-1 rounded hover:bg-green-300"
            >
              {menu}
            </NavLink>
          ))}
        </nav>
        <button
          className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
          onClick={() =>
            (window.location.href = "https://github.com/subrotoice")
          }
        >
          SubrotoGit
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default NavBar;
