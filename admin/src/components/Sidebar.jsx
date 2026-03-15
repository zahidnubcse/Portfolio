import { Link } from "react-router-dom";

export default function Sidebar({ open, setOpen }) {

  return (
    <>
      {/* Overlay (mobile) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}

      <aside
        className={`fixed md:sticky top-0 left-0 h-screen w-60 bg-gray-900 text-white p-5 z-50
        transform ${open ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 transition-transform duration-300`}
      >

        {/* Close button */}
        <button
          onClick={() => setOpen(false)}
          className="md:hidden text-xl mb-6"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold mb-6">Dashboard</h2>

        <ul className="space-y-4">

          <li>
            <Link
              to="/admin/add"
              className="block hover:text-gray-300"
            >
              Add Project
            </Link>
          </li>

          <li>
            <Link
              to="/admin/projects"
              className="block hover:text-gray-300"
            >
              All Projects
            </Link>
          </li>

        </ul>

      </aside>
    </>
  );
}