import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";


const Review = () => {
    const [review, setreview]= useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/review')
        .then(res => res.json())
        .then(data => setreview(data))

    },[])
    return (
        <div className=" grid lg:grid-cols-4">
            {
                review.map(reviewData => <div className="border p-5 text-xl" key={reviewData._id}>
                    <h1 className="flex gap-2"> <span className="font-bold">Rating:</span><span className="text-yellow-600 flex"><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar></span>{reviewData.rating}</h1>
                    <h1> <span className="font-bold">Review:</span> {reviewData.review}</h1>
                </div>)
                
            }
            
        </div>
    );
};

export default Review;