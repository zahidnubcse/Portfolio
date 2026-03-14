import { useNavigate } from "react-router-dom";

export default function Navbar() {

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token"); // remove JWT
    navigate("/admin/login");          // use React Router redirect
  }

  return (
    <div className="flex justify-between items-center p-4 bg-white shadow">
      <h1 className="text-xl font-bold">ZahidHasan</h1>
      <button
        onClick={logout}
        className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  )
}