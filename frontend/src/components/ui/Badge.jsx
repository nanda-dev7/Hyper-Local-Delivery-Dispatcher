const Badge = ({ status }) => {
  const statusColors = {
    pending:
      "bg-yellow-100 text-yellow-800",

    assigned:
      "bg-blue-100 text-blue-800",

    accepted:
      "bg-purple-100 text-purple-800",

    delivered:
      "bg-green-100 text-green-800",

    cancelled:
      "bg-red-100 text-red-800",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-medium ${
        statusColors[status] ||
        "bg-gray-100 text-gray-800"
      }`}
    >
      {status}
    </span>
  );
};

export default Badge;