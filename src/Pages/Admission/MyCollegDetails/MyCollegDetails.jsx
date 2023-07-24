import { Link } from "react-router-dom";

const MyCollegDetails = ({ admisiondata }) => {
    console.log(admisiondata);
    const { viewData, image, _id } = admisiondata
    return (
        <div className="">
            <div className="md:flex mt-5 pa-5 border p-5 rounded text-xl ">
                <img className="w-[400px]" src={viewData?.college_logo} alt="" />

                <div className="ml-20 ">
                    <h1> <span className="font-semibold">Admission ID:</span> {_id}</h1>
                    <h1> <span className="font-semibold">College Name:</span> {viewData.college_name}</h1>
                    <h1> <span className="font-semibold">Total Students:</span> {viewData.
                        total_students}</h1>
                    <h1> <span className="font-semibold">Established Date:</span> {viewData.
                        established_Date}</h1>
                    <h1> <span className="font-semibold">location:</span> {viewData.
                        location}</h1>
                    <h1> <span className="font-semibold">Total Students Graduate:</span> {viewData.
                        total_students_graduate}</h1>
                    <h1> <span className="font-semibold">Programs Offered:</span> {viewData.

                        programs_offered}</h1>

                        <Link className="btn btn-primary mt-4" to='/reviewfrom'>Give Review</Link>
                
                </div>
            </div>

        </div>


    );
};

export default MyCollegDetails;