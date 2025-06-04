import { useParams } from "react-router";
import { useEffect, useState } from "react";
import FormatDate from "./FormatDate";
import TikcetItemDescription from "./TikcetItemDescription";
import LoadingDetail from "../MsgComponents/LoadingDetails";
import { useAuth } from "../ContextProvider/AuthProvider";

const TicketDetails = ({ tikcet }) => {
  const availableSeat = tikcet.seats - tikcet.reservedBy;

  const aChange = availableSeat
    ? "text-green-500 --border-bottom-intexted"
    : "text-red-400 --border-bottom-intexted";

  const DescriptionCondition = tikcet.description;
  //
  const [loading, setLoading] = useState(false);
  const [ticket, setTicket] = useState(null);
  const { id } = useParams();
  const { username } = useAuth();
  //

  const fetchTicket = async () => {
    try {
      setLoading(true);
      const res = await fetch(`http://test.joo.nz/ticket/${id}`, {
        method: "GET",
      });
      const Json = await res.json();
      setTicket(Json);
      console.log(Json);
      setLoading(false);
    } catch (err) {
      setLoading(true);
      console.log(`Wrong To load ID :${err}`);
    }
  };

  const handleReserve = async () => {
    const token = localStorage.getItem("token");
    const res = await fetch(`http://test.joo.nz/ticket/${id}/reserve`, {
      method: "POST",
      headers: { authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    console.log(data);

    fetchTicket();
  };

  const alreadyReserved = ticket?.reservedBy?.includes(username);

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
              {tikcet.description}{" "}
              <span className="text-4xl text-shadow-lg text-gray-800">
                {" "}
                {tikcet.id}
              </span>
            </p>
          </div>

          <p>
            Price:{" "}
            <span className="--border-bottom-intexted">{tikcet.price}</span>$
          </p>

          <p className="flex gap-2">
            Added Date:
            <span className="--border-bottom-intexted">
              <FormatDate date={tikcet.addedDate} />
            </span>
          </p>

          <p>
            Availbale Seats:{" "}
            <span className={aChange}>{tikcet.seats - tikcet.reservedBy}</span>
          </p>

          {DescriptionCondition ? (
            <TikcetItemDescription description={"textLorem"} />
          ) : null}

          <div className="--flexy">
            {!alreadyReserved && (
              <button
                disabled={availableSeat === 0}
                onClick={handleReserve}
                className="--reserve--button"
              >
                {availableSeat === 0 ? "Full" : "Reserve !"}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default TicketDetails;
