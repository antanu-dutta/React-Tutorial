const WelcomeMsg = ({ todoItems }) => {
  const style = {
    fontSize: "35px",
    fontWeight: "Bold",
    color: "orange",
  };
  return <p style={style}>{todoItems.length === 0 && "Enjoy your day"}</p>;
};
export default WelcomeMsg;
