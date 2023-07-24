import { Link } from "react-router-dom";

const AdmissionSingel = ({collegdata}) => {
    const {college_name,_id,college_logo}=collegdata
    console.log(collegdata);
    return (
        <div className="flex  border rounded p-5">
            <img className="w-[100px]" src={college_logo} alt="" />
           <div className="ml-14">
           <h1 className="text-xl mb-2">{college_name}</h1>
            <Link to={`/admissionform/${_id}`}><button className='btn btn-primary'> Admission Now </button></Link>
           </div>
           
            
        </div>
    );
};

export default AdmissionSingel;