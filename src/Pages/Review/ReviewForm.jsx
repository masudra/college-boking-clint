import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ReviewForm = () => {
    const { register, handleSubmit,reset } = useForm();
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const onSubmit = data => {
        console.log(data);
        fetch('https://college-boking-server-site.vercel.app/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId)
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: ' Class Add SuccessFull',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    navigate(from, { replace: true });
                reset()

            }
            )
    }

    return (
        <div><div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input type="number"{...register("rating", { required: true })} placeholder="Rating" name="rating" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Review</span>
                                </label>
                                <input type="text" {...register("review", { required: true })} placeholder='Review' name="review" className="input input-bordered h-[150px]" />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        </div>
    );
};

export default ReviewForm;