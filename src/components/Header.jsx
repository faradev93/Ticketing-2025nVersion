import { Link, NavLink, Outlet, useNavigate } from "react-router";
import { usePrivateRoute } from "../ContextProvider/PrivateRouteProvider";
import toast from "react-hot-toast";
import { useUserBalance } from "../ContextProvider/UserBalanceProvider";
import BalanceLoading from "../MsgComponents/BalanceLoading";
import { useState } from "react";
import { signOutUser } from "../api/auth";

const Header = ({ children }) => {
  const { email } = usePrivateRoute();
  const { balance, setBalance, reservedTickets, setReservedTickets } =
    useUserBalance();
  const navigate = useNavigate();
  const [Loading, showLoading] = useState(true);

  const SignoutBTN = () => {
    signOutUser(navigate);
  };

  const showNameHeader = () => {
    const name = email.charAt(0).toUpperCase() + email.slice(1);
    if (name) {
      return name;
    }
    if (!name) {
      return "Error when parsing your name😑";
    }
  };
  const showname = showNameHeader();

  const changeBalanceColor =
    balance > 50
      ? "font-bold border-b-2 text-blue-600"
      : "font-bold border-b-2 text-red-600";

  const BalanceLoad = () => {
    if (balance) return balance;
    if (balance === 0) return 0;
    if (!balance) return <BalanceLoading />;
    console.log(balance);
  };

  const showBalance = BalanceLoad();

  return (
    <div>
      <div className="--header--style p-2">
        <div className="--header-part--1 font-[DgOcean-2]">
          <ul className="--header-part--1">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "--tickets-links-style" : ""
                }
                to={"/tickets"}
                end
              >
                Tickets
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "--tickets-links-style" : ""
                }
                to={"/tickets/reserved"}
                end
              >
                My Tickets (
                <span className="border-b-2 border-dashed">
                  {reservedTickets.length}
                </span>
                )
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="flex gap-8 items-center font-[DgOcean-2] select-none">
          <ul className="flex gap-8 items-center font-[DgOcean-2] select-none">
            <li className="flex flex-col gap-4">
              <div>
                ✔ {showname}
                <span className="font-light p-2 rounded-xs m-2"></span>
              </div>

              <p>
                Balance:
                <span className={changeBalanceColor}>{showBalance}</span>$
              </p>
            </li>
            <li>
              <button onClick={SignoutBTN} className="--signout-btn">
                Sign Out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
