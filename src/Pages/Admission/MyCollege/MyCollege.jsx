import { useEffect, useState } from "react";
import MyCollegDetails from "../MyCollegDetails/MyCollegDetails";

const MyCollege = () => {
    const [admission, setadmisssion]= useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/admissionData')
        .then(res => res.json())
        .then(data => setadmisssion(data))

    },[])
    return (
        <div>
            {
                admission.map(admisiondata =>
                     <MyCollegDetails
                      key={admisiondata?._id}
                      admisiondata={admisiondata}
                ></MyCollegDetails>)
            }
            
        </div>
    );
};

export default MyCollege;