import { useEffect,useState } from "react";
import axios from "axios";

export default function AllProjects(){

const [projects,setProjects] = useState([]);

const getProjects = async()=>{

const res = await axios.get(
"http://localhost:5000/api/projects"
);

setProjects(res.data);

}

useEffect(()=>{
getProjects();
},[])

const deleteProject = async(id)=>{

const token = localStorage.getItem("token");

await axios.delete(
`http://localhost:5000/api/projects/delete/${id}`,
{
headers:{
Authorization:`Bearer ${token}`
}
}
);

getProjects();
}

return(

<div>

<h2 className="text-2xl font-bold mb-4">All Projects</h2>

<table className="w-full bg-white shadow">

<thead>
<tr className="bg-gray-200">
<th className="p-2">Thumbnail</th>
<th className="p-2">Link</th>
<th className="p-2">Action</th>
</tr>
</thead>

<tbody>

{projects.map((p)=>(
<tr key={p._id} className="border">

<td className="p-2">
<img src={p.thumbnail} className="w-20"/>
</td>

<td className="p-2">{p.link}</td>

<td className="p-2 space-x-2">

<button className="bg-blue-500 text-white px-3 py-1">
Edit
</button>

<button
onClick={()=>deleteProject(p._id)}
className="bg-red-500 text-white px-3 py-1"
>
Delete
</button>

</td>

</tr>
))}

</tbody>

</table>

</div>

)
}