import Navbar from "../components/Navbar";

const DashboardLayout = ({
  title,
  children,
}) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">
          {title}
        </h1>

        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;