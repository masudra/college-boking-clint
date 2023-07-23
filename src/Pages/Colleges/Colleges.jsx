import { useEffect, useState } from "react";
import CollegesDetailes from "./CollegesDetailes/CollegesDetailes";

const Colleges = () => {
const [Colleges, setColleges]= useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/collegeCampus/')
        .then(res => res.json())
        .then(data => setColleges(data))
    },[])
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 mt-10 ">
            {
                Colleges.map(colegData => 
                <CollegesDetailes 
                key={colegData._id}
                colegData={colegData}>

                </CollegesDetailes>)

            }
            
        </div>
    );
};

export default Colleges;