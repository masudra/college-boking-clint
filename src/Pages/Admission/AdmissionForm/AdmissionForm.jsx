import { useForm } from "react-hook-form";


const AdmissionForm = () => {
    const { register, handleSubmit, } = useForm();

    const onSubmit = data => {
        console.log(data)}
    return (
        <div>
            <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-9">
                        {/*  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Name</span>
                            </label>
                            <input type="text"{...register("name", { required: true })} placeholder="Name" name="name" className="input input-bordered" />
                        </div>
                        {/*  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Subject</span>
                            </label>
                            <input type="text" {...register("subject", { required: true })} placeholder="Subject" name="subject" className="input input-bordered" required />
                        </div>
                        {/*  */}
                        {/*  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} placeholder="Email" name="email"  className="input input-bordered" required />
                        </div>
                        {/*  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone number</span>
                            </label>
                            <input type="number" {...register("number", { required: true })} placeholder="Phone number" name="number"  className="input input-bordered" required />
                        </div>
                        {/*  */}
                        {/*  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input type="text" {...register("address", { required: true })} placeholder="Address" name="address" className="input input-bordered" required />
                        </div>
                        {/*  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date of Birth</span>
                            </label>
                            <input type="date" {...register("date", { required: true })} placeholder="Date of Birth" name="date" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">img</span>
                            </label>
                            <input type="text" {...register("img", { required: true })} placeholder="img" name="img" className="input input-bordered" required />
                        </div>
                        
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" value="Add Toys " />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdmissionForm;