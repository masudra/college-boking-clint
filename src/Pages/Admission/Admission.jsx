import { useEffect, useState } from "react";

const Admission = () => {
    const [Colleges, setColleges] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/collegeCampus/')
            .then(res => res.json())
            .then(data => setColleges(data))
    }, [])
    return (
        <div>
            {
                Colleges.map(collegdata => <>
                    <img className="h-[260px]" src={collegdata?.college_logo} alt="Shoes" />                    <p>{collegdata?.college_name}</p>
                    <button>Admission Now</button>
                </>)
            }

        </div>
    );
};

export default Admission;