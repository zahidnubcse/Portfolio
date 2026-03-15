import { useEffect, useState } from "react";
import axios from "axios";

export default function AllProjects() {
  const [projects, setProjects] = useState([]);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ title: "", description: "", link: "", file: null });
  const API_URL = import.meta.env.VITE_API_URL;

  const getProjects = async () => {
    try {
      const res = await axios.get(`${API_URL}/projects`);
      setProjects(res.data);
    } catch (err) {
      console.error("Error fetching projects:", err);
    }
  };

  useEffect(() => { getProjects(); }, []);

  const deleteProject = async (id) => {
    const token = localStorage.getItem("token");
    if (!window.confirm("Are you sure?")) return;
    await axios.delete(`${API_URL}/projects/delete/${id}`, { headers: { Authorization: `Bearer ${token}` } });
    getProjects();
  };

  const startEdit = (project) => {
    setEditing(project);
    setForm({ title: project.title, description: project.description, link: project.link, file: null });
  };

  const cancelEdit = () => {
    setEditing(null);
    setForm({ title: "", description: "", link: "", file: null });
  };

  const submitEdit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("link", form.link);
    if (form.file) formData.append("thumbnail", form.file);

    try {
      await axios.put(`${API_URL}/projects/update/${editing._id}`, formData, {
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" }
      });
      cancelEdit();
      getProjects();
    } catch (err) {
      console.error("Error updating project:", err);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">All Projects</h2>

      {editing && (
        <div className="p-4 mb-6 bg-gray-100 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Edit Project</h3>
          <form onSubmit={submitEdit} className="space-y-2">
            <input
              type="text"
              placeholder="Title"
              value={form.title}
              onChange={e => setForm({ ...form, title: e.target.value })}
              className="border p-2 w-full rounded"
            />
            <textarea
              placeholder="Description"
              value={form.description}
              onChange={e => setForm({ ...form, description: e.target.value })}
              className="border p-2 w-full rounded"
            />
            <input
              type="text"
              placeholder="Project Link"
              value={form.link}
              onChange={e => setForm({ ...form, link: e.target.value })}
              className="border p-2 w-full rounded"
            />
            <input
              type="file"
              onChange={e => setForm({ ...form, file: e.target.files[0] })}
              className="border p-2 w-full rounded"
            />
            <div className="flex space-x-2 mt-2">
              <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded">Save</button>
              <button type="button" onClick={cancelEdit} className="bg-gray-500 text-white px-3 py-1 rounded">Cancel</button>
            </div>
          </form>
        </div>
      )}

      <table className="w-full bg-white shadow">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Thumbnail</th>
            <th className="p-2">Link</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {projects.map(p => (
            <tr key={p._id} className="border">
              <td className="p-2">
                {/* Use Cloudinary URL directly */}
                <img src={p.thumbnail} alt={p.title} className="w-20 h-20 object-cover rounded"/>
              </td>
              <td className="p-2">{p.link}</td>
              <td className="p-2 space-x-2">
                <button onClick={() => startEdit(p)} className="bg-blue-500 text-white px-3 py-1 rounded">Edit</button>
                <button onClick={() => deleteProject(p._id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}