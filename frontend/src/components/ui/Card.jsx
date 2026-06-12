const Card = ({ children }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition">
      {children}
    </div>
  );
};

export default Card;