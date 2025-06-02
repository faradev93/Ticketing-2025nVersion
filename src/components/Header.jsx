import { NavLink } from "react-router";


const Header = ({ children }) => {
  return (
    <div>
      <div className="--header--style">
        <div className="--header-part--1 font-[DgOcean-2]">
          <ul className="--header-part--1">
            <li>
              <NavLink to={"/tickets"} end>
                Tickets
              </NavLink>
            </li>
            <li>
              <NavLink to={"/tickets/reserved"} end>
                My Tickets
              </NavLink>
            </li>
            <li>Faramarz Test</li>
          </ul>
        </div>

        <div className="flex gap-8 items-center">
          <li className="flex flex-col gap-4">
            <div>
              Welcome
              <span className="font-light p-2 rounded-xs border-l-2 m-2 hover:border-r-2 duration-50 transition-all hover:border-b-2 duration-50"></span>
            </div>

            <span>Balance:$</span>
          </li>
          <li>
            <button className="border-2 border-sky-400/30 p-2 hover:bg-red-400/50 transition-colors duration-300 origin-center">
              Sign Out
            </button>
          </li>
        </div>
      </div>
    </div>
  );
};
export default Header;
