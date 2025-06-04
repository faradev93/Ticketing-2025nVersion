import dayjs from "dayjs";
const FormatDate = ({ date }) => {
  const formatted = dayjs(date).format("YYYY,MM,DD HH:MM");

  return <span>{formatted}</span>;
};

export default FormatDate;
