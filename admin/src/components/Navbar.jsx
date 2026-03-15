import { useNavigate } from "react-router-dom";

export default function Navbar({ setOpen }) {

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/admin/login");
  }

  return (
    <div className="flex items-center justify-between bg-white shadow px-4 py-3">

      {/* Mobile Menu */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden text-2xl"
      >
        ☰
      </button>

      <h1 className="text-lg md:text-xl font-bold">
        ZahidHasan
      </h1>

      <button
        onClick={logout}
        className="bg-red-500 text-white px-3 md:px-4 py-1 rounded hover:bg-red-600 transition"
      >
        Logout
      </button>

    </div>
  );
}