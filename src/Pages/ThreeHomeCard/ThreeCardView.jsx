import { useLoaderData } from "react-router-dom";

const ThreeCardView = () => {
    const viewData = useLoaderData()
    const { college_logo, college_name, events, sports, research_history, admission_process } = viewData

    console.log(viewData.admission_process[2]);
    return (
        <div>
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={college_logo} className="w-[500px] h-[400px] rounded-lg " />
                        <div>
                            <h1 className="text-2xl font-semibold">{college_name}</h1>
                            <div>
                                <h1 className=" font-semibold text-2xl"> Admission Process</h1>
                                <div>
                                    <p className="">{admission_process[0]?.title}</p>
                                    <p className="">{admission_process[0]?.deadline}</p>
                                    <p className="">{admission_process[0]?.description}</p>
                                </div>
                                <div className="mt-5">
                                <p className="">{admission_process[1]?.title}</p>
                                    <p className="">{admission_process[1]?.description}</p>
                                </div>
                                <div className="mt-5">
                                <p className="">{admission_process[2]?.title}</p>
                                    <p className="">{admission_process[2]?.description}</p>
                                </div>
                            </div>
                            <div className="mt-4">
                                <h1 className="text-xl font-bold ">Research History</h1>
                                <div>
                                    <p className="">{research_history[0]?.title}</p>
                                    <p className="">{research_history[0]?.publication_date}</p>
                                    <p className="">{research_history[0]?.authors}</p>
                                    <p className="">{research_history[0]?.description}</p>

                                </div>
                                <div className="mt-4">
                                    <p className="">{research_history[1]?.title}</p>
                                    <p className="">{research_history[1]?.publication_date}</p>
                                    <p className="">{research_history[1]?.authors}</p>
                                    <p className="">{research_history[1]?.description}</p>
                                </div>
                            </div>
                            <div>
                                <h1 className=" text-2xl font-semibold mt-6 mb-4 gap-5">Sports</h1>
                                <div className="grid lg:grid-cols-2 gap-5">
                                    <div>
                                        <p><span className="font-semibold">Sport Name:</span> {sports.teams[0].sport}</p>
                                        <p><span className="font-semibold">Team Name:</span> {sports.teams[0].name}</p>
                                        <p><span className="font-semibold">Captain Name:</span> {sports.teams[0].captain}</p>
                                        <p><span className="font-semibold">Coach Name:</span> {sports.teams[0].coach}</p>
                                    </div>
                                    <div>
                                        <p><span className="font-semibold">Sport Name:</span> {sports.teams[1].sport}</p>
                                        <p><span className="font-semibold">Team Name:</span> {sports.teams[1].name}</p>
                                        <p><span className="font-semibold">Captain Name:</span> {sports.teams[1].captain}</p>
                                        <p><span className="font-semibold">Coach Name:</span> {sports.teams[1].coach}</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h1 className=" font-semibold text-2xl">Events</h1>
                                <div>
                                    <p className="">{events[0]?.name}</p>
                                    <p className="">{events[0]?.date}</p>
                                    <p className="">{events[0]?.location}</p>
                                    <p className="">{events[0]?.description}</p>
                                </div>
                                <div className="mt-5">
                                    <p className="">{events[1]?.name}</p>
                                    <p className="">{events[1]?.date}</p>
                                    <p className="">{events[1]?.location}</p>
                                    <p className="">{events[1]?.description}</p>
                                </div>
                                <div className="mt-5">
                                    <p className="">{events[2]?.name}</p>
                                    <p className="">{events[2]?.date}</p>
                                    <p className="">{events[2]?.location}</p>
                                    <p className="">{events[2]?.description}</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default ThreeCardView;