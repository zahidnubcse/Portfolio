import { useState } from "react";
import axios from "axios";

export default function AddProject() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [file, setFile] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL;

  const addProject = async (e) => {
    e.preventDefault();
    if (!title || !description || !link || !file) return alert("All fields are required!");

    const token = localStorage.getItem("token");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("link", link);
    formData.append("thumbnail", file);

    try {
      await axios.post(`${API_URL}/projects/add`, formData, {
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" }
      });

      alert("Project Added Successfully");
      setTitle(""); setDescription(""); setLink(""); setFile(null);
    } catch (err) {
      console.error(err);
      alert("Error adding project");
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-lg p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Project</h2>
      <form onSubmit={addProject} className="space-y-4">
        <input type="text" placeholder="Project Title" value={title} onChange={e => setTitle(e.target.value)} className="border p-2 w-full rounded"/>
        <textarea placeholder="Project Description" value={description} onChange={e => setDescription(e.target.value)} className="border p-2 w-full rounded"/>
        <input type="text" placeholder="Project Link" value={link} onChange={e => setLink(e.target.value)} className="border p-2 w-full rounded"/>
        <input type="file" onChange={e => setFile(e.target.files[0])} className="border p-2 w-full rounded"/>
        {file && <img src={URL.createObjectURL(file)} className="w-32 mt-2" />}
        <button className="bg-black text-white w-full py-2 rounded hover:bg-gray-800 transition">Add Project</button>
      </form>
    </div>
  );
}