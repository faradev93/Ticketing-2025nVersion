import { Link } from "react-router";
import { useEffect, useState } from "react";
import { useAuth } from "../ContextProvider/AuthProvider";
import FormatDate from "./FormatDate";
import LoadingDetail from "../MsgComponents/LoadingDetails";
import TicketItemDescription from "./TicketItemDescription";

const TicketDetails = ({ ticket }) => {
  const availableSeat = ticket.seats - ticket.reservedBy;

  const aChange = availableSeat
    ? "text-green-500 --border-bottom-intexted"
    : "text-red-400 --border-bottom-intexted";

  // const DescriptionCondition = ticket.description;
  //
  const [loading, setLoading] = useState(false);

  const { username } = useAuth();
  //
  const handleReserve = async () => {
    const token = localStorage.getItem("token");
    const res = await fetch(`http://test.joo.nz/ticket/5`, {
      method: "POST",
      headers: { authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    console.log(data);

    fetchTicket();
  };

  // useEffect(() => {
  //   fetchTicket();
  // }, [id]);
  //
  return (
    <div>
      {loading ? (
        <LoadingDetail />
      ) : (
        <div className="--card--main--detail">
          <div className="--flexy flex-col">
            <p className="--border-bottom-intexted --description--font flex justify-center items-center gap-4">
              {ticket.description}{" "}
              <span className="text-4xl text-shadow-lg text-gray-800">
                {" "}
                {ticket.id}
              </span>
            </p>
          </div>

          <p>
            Price:{" "}
            <span className="--border-bottom-intexted">{ticket.price}</span>$
          </p>

          <p className="flex gap-2">
            Added Date:
            <span className="--border-bottom-intexted">
              <FormatDate date={ticket.addedDate} />
            </span>
          </p>

          <p>
            Availbale Seats:{" "}
            <span className={aChange}>{ticket.seats - ticket.reservedBy}</span>
          </p>

          {/* {DescriptionCondition ? (
            <TicketItemDescription description={"textLorem"} />
          ) : null} */}

          <div className="--flexy">
            <Link
              to={`/tickets/${ticket.id}`}
              // disabled={availableSeat === 0}
              // onClick={"ss"}
              className="--reserve--button"
            >
              {availableSeat === 0 ? "Full" : "Reserve !"}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
export default TicketDetails;
