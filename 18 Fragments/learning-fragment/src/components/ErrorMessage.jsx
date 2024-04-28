const ErrorMessage = ({ items }) => {
  return (
    <>
      {items.length === 0 && (
        <h3 style={{ textAlign: "center" }}>I am still hungry</h3>
      )}
    </>
  );
};

export default ErrorMessage;
