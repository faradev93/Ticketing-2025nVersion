import { useUserBalance } from "../ContextProvider/UserBalanceProvider";
import Display_Flex from "./Display_Flex";
import TicketDetails from "./TicketDetails";

const ReservedTickets = () => {
  const { reservedTickets } = useUserBalance();
  console.log(reservedTickets);
  return (
    <div>
      <div>
        <Display_Flex>
          {reservedTickets.map((item) => {
            return <TicketDetails ticket={item} key={item.id} />;
          })}
        </Display_Flex>
      </div>
    </div>
  );
};

export default ReservedTickets;
