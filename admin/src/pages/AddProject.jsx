import { useState } from "react";
import axios from "axios";

export default function AddProject(){

const [thumbnail,setThumbnail] = useState("");
const [link,setLink] = useState("");

const addProject = async(e)=>{
e.preventDefault();

const token = localStorage.getItem("token");

await axios.post(
"http://localhost:5000/api/projects/add",
{thumbnail,link},
{
headers:{
Authorization:`Bearer ${token}`
}
}
);

alert("Project Added");
}

return(

<div>

<h2 className="text-2xl font-bold mb-4">Add Project</h2>

<form onSubmit={addProject} className="space-y-3">

<input
type="text"
placeholder="Thumbnail URL"
className="border p-2 w-full"
onChange={(e)=>setThumbnail(e.target.value)}
/>

<input
type="text"
placeholder="Project Link"
className="border p-2 w-full"
onChange={(e)=>setLink(e.target.value)}
/>

<button className="bg-black text-white px-4 py-2">
Add Project
</button>

</form>

</div>

)
}