import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Research = () => {
    const [research, setResearch] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/research')
            .then(res => res.json())
            .then(data => setResearch(data))
    }, [])
    return (
      <div>
        <h1 className="text-center text-4xl font-bold"> Research Papers </h1>
          <div className="grid lg:grid-cols-2 gap-5 text-xl mt-5 my-10 ">
            {
                research.map(researchData => <div key={researchData?._id} className="p-5 border rounded bg-slate-200 text-black">
                    <p><span className="font-bold">Researcher Name:</span> {researchData?.name}</p>
                    <p><span className="font-bold">Research Name:</span> {researchData?.title}</p>
                    <p><span className="font-bold">Researcher Date:</span> {researchData?.date}</p>
                    <Link className="btn-link" to= {researchData?.Link}target='-blank'>Research Link</Link>
                  
                </div>)
            }
            
        </div>
      </div>
    );
};

export default Research;