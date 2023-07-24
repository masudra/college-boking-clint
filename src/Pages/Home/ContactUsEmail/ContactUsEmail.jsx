import { useRef } from 'react';

import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const ContactUsEmail = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
       

        emailjs.sendForm('service_yhotwbt', 'template_9owm68b', form.current, '0Nwt1DDvPHY4j1ddc')
            .then((result) => {
                if (result.text === 'OK') {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your Email has been Send',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            }, (error) => {
                alert(error.text);
            });

    };


    return (
        <div data-aos="zoom-out-up" id='contact'>
            <h1 className=" text-4xl text-purple-700 text-center link mt-16 -mb-16">Contact</h1>
            <div className='md:grid grid-cols-2 my-20 border shadow p-10 '>
                <div>
                    <div className=' md:ml-60 mb-8'>
                        <div className='flex'>
                            <img className='w-[25px] mr-3 ' src="../../../../public/email (1).png" alt="" />
                            <h1 className=' text-xl'> Email</h1>
                        </div>
                        <h1 className='text-xl'> masudrana6278312@gmail.com</h1>
                    </div>
                    <div className=' md:ml-60 mb-8'>
                        <div className='flex'>
                            <img className='w-[25px] mr-3 ' src="../../../../public/phone-call.png" alt="" />
                            <h1 className=' text-xl'> Phone</h1>
                        </div>
                        <h1 className='text-xl'>+880 1946545385</h1>
                    </div>
                    <div className=' md:ml-60 mb-8'>
                        <div className='flex'>
                            <img className='w-[30px] mr-3 ' src="../../../../public/Adress icon.png" alt="" />
                            <h1 className=' text-xl'>Address</h1>
                        </div>
                        <h1 className='text-xl'>Chuadanga, Khulna, Bangladesh</h1>
                    </div>


                </div>
                <div className=" md:ml-10 ">
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name="from_name" placeholder="Enter Your Name" className=" my-2 input input-bordered input-primary w-full max-w-xs" required /><br />
                        <input type="email" name="user_email" placeholder="Enter Your Email" className=" my-2 input input-bordered input-primary w-full max-w-xs" required /><br />
                        <input type="text" name="message" placeholder=" Description" className=" my-2 input input-bordered input-primary  w-full h-[120px] max-w-xs" required /><br />
                        <input className=" my-2 input input-bordered bg-primary  w-full text-white max-w-xs" type="submit" value='Send' />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default ContactUsEmail;