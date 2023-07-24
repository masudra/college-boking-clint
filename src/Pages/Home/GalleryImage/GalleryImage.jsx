import { useEffect, useState } from "react";

const GalleryImage = () => {
    const [galleryImg, setGalleryImg] = useState([])

    useEffect(() => {
        fetch('https://college-boking-server-site.vercel.app/imagegallery')
            .then(res => res.json())
            .then(data => setGalleryImg(data))
    }, [])
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 p-10 ">
            {
                galleryImg.map(image => <img key={image?._id} className=" w-96 h-[260px] rounded" src={image.gallery_image}/>)

            }
        </div>
    );
};

export default GalleryImage;