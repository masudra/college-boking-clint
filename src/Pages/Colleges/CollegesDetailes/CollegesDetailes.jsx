import { Link } from "react-router-dom";

const CollegesDetailes = ({ colegData }) => {
    const { _id,college_logo, college_name, rating, total_recearch,admission_dates,fall} = colegData;
    return (
        <div>
            <div className="card lg:w-96 h-[500px] bg-base-100 shadow-xl">
                <figure><img className="h-[260px]" src={college_logo}  /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">{college_name}</h2>
                    <p><span className="font-bold">Rating:</span> {rating}</p>
                    <p><span className="font-bold">Total Recearch:</span> {total_recearch}</p>
                    <p><span className="font-bold">Total Recearch:</span> {admission_dates?.fall}</p>
                    
                    <div className="card-actions justify-end">
                    <Link to={`/viewdetels/${_id}`}><button className='btn btn-primary'>Veiw</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CollegesDetailes;