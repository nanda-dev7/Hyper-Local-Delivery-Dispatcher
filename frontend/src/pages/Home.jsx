import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
      }}
    >
      <h1>Hyper Local Delivery Dispatcher</h1>

      <p>
        Fast parcel delivery management system
      </p>

      <div
        style={{
          marginTop: "30px",
        }}
      >
        <Link to="/">
          <button>Login</button>
        </Link>

        <Link
          to="/register"
          style={{ marginLeft: "10px" }}
        >
          <button>Register</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;