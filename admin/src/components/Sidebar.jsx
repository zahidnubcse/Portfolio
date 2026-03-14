import { Link } from "react-router-dom";

export default function Sidebar(){

return(

<div className="w-60 h-screen bg-gray-900 text-white p-5">

<h2 className="text-xl font-bold mb-6">Dashboard</h2>

<ul className="space-y-4">

<li>
<Link to="/admin/add">Add Project</Link>
</li>

<li>
<Link to="/admin/projects">All Projects</Link>
</li>

</ul>

</div>

)
}