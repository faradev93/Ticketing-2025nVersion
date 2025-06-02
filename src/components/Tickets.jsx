import { useUserInfoProvider } from "../ContextProvider/UserInfoProvider";

export default function Tickets({ childern }) {
  const { balance } = useUserInfoProvider();
  console.log(balance);

  return <div className="--ticket--main-page">comp Ticketa</div>;
}
