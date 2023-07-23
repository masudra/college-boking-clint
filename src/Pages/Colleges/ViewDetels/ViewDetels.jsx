import { useLoaderData } from "react-router-dom";

const ViewDetels = () => {
    const viewData = useLoaderData()
    console.log(viewData);
    return (
        <div>
            <h1>{viewData?.college_name}</h1>
            
        </div>
    );
};

export default ViewDetels;