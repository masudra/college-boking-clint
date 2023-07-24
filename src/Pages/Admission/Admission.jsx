import { useEffect, useState } from "react";
import AdmissionSingel from "./AdmissionSingel";

const Admission = () => {
    const [Colleges, setColleges] = useState([])
    useEffect(() => {
        fetch('https://college-boking-server-site.vercel.app/collegeCampus/')
            .then(res => res.json())
            .then(data => setColleges(data))
    }, [])
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 p-5 gap-5">
            {
                Colleges.map(collegdata => <AdmissionSingel key={collegdata?._id}collegdata={collegdata}></AdmissionSingel> )
            }

        </div>
    );
};

export default Admission;