import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const imageHosting = import.meta.env.VITE_Image_Uploade_Token;

const AdmissionForm = () => {
    const { register, handleSubmit, reset } = useForm();
    const image_Hosting_Url = `https://api.imgbb.com/1/upload?key=${imageHosting}`
    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])
        fetch(image_Hosting_Url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageRespon => {
                if (imageRespon.success) {
                    const imgUrl = imageRespon.data.display_url;
                    const { address, date, email, name, number, subject, } = data;
                    const menuAdmission = {
                        address, date, email, name, number, subject, image:imgUrl
                    }
                    fetch('http://localhost:5000/admissionData', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(menuAdmission)
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
                            reset()
            
                        }
                        )
                    console.log(menuAdmission);
                }
            })


       


    }


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
                            <input type="email" {...register("email", { required: true })} placeholder="Email" name="email" className="input input-bordered" required />
                        </div>
                        {/*  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone number</span>
                            </label>
                            <input type="number" {...register("number", { required: true })} placeholder="Phone number" name="number" className="input input-bordered" required />
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
                                <span className="label-text"> Upload image </span>
                            </label>
                            <input type="file" {...register("image", { required: true })} name="image" className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
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