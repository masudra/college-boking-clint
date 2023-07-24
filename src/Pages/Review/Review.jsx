import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";


const Review = () => {
    const [review, setreview] = useState([])
    useEffect(() => {
        fetch('https://college-boking-server-site.vercel.app/review')
            .then(res => res.json())
            .then(data => setreview(data))

    }, [])
    return (
        <div className=" grid lg:grid-cols-2 gap-10 px-40 mb-5">
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