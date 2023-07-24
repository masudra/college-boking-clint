
const MyCollegDetails = ({admisiondata}) => {
    console.log(admisiondata);
    const {viewData,image} =admisiondata
    return (
        <div>
            <img className="" src={image} alt="" />
            <h1>{viewData.college_name}</h1>
            {/* <h1>{viewData.established_Date}</h1> */}
            
        </div>
    );
};

export default MyCollegDetails;