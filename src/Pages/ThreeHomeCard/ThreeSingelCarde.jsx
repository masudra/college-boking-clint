import { Link } from "react-router-dom";

const ThreeSingelCarde = ({ singelCardData }) => {
    const { college_name, college_logo, rating, total_recearch, admission_dates, _id,events,research_history,sports} = singelCardData
    return (
        <div>
            <div className="card lg:w-96  bg-base-100 shadow-xl">
                <figure><img className="h-[260px]" src={college_logo} /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">{college_name}</h2>
                    <p><span className="font-bold"> Admission date:</span> {admission_dates?.fall}</p>
                    <div>
                        <h1 className="text-xl font-bold ">Eventes </h1>
                        <p className="">{events[0]?.name}</p>
                        <p className="">{events[0]?.date}</p>
                        <p className="">{events[0]?.location}</p>
                        <p className="">{events[0]?.description}</p>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold ">Research History</h1>
                        <p className="">{research_history[0]?.title}</p>
                        <p className="">{research_history[0]?.publication_date}</p>
                        <p className="">{research_history[0]?.authors}</p>
                        <p className="">{research_history[0]?.description}</p>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold ">Sports</h1>
                        <p className="">{sports.teams[0].sport}</p>
                        <p className="">{sports.teams[0].captain}</p>
                        <p className="">{sports.teams[0].coach}</p>
                        <p className="">{sports.teams[0].name}</p>
                        
                    </div>
                    
                   



                    <div className="card-actions justify-end">
                        <Link to={`/threecardes/${_id}`}><button className='btn btn-primary'> Veiw Details</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ThreeSingelCarde;