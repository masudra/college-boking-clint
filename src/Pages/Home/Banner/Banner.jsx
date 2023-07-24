
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import log1 from '../../../../public/banner.avif'
import log2 from '../../../../public/banner1.jpg'
import log3 from '../../../../public/RU.webp'
import log4 from '../../../../public/jahangir.png'


const Banner = () => {


    return (
          


        <div className="carousel w-full h-[500px] my-10">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={log1} className="w-full " />
                <div className="absolute  flex items-center h-full left-0 right-0 top-4 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                            <div className='text-white space-y-7 ml-4 pl-12 w-1/2'>
                                <h5 className='text-5xl font-bold'> Harvard University Campus</h5>
                                
                                
                            </div>
                        </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={log2} className="w-full" />
                <div className="absolute  flex items-center h-full left-0 right-0 top-4 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                            <div className='text-white space-y-7 ml-4 pl-12 w-1/2'>
                                <h5 className='text-5xl font-bold'> University graduation party </h5>
                              

                            </div>
                        </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={log3} className="w-full" />
                <div className="absolute  flex items-center h-full left-0 right-0 top-4 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                            <div className='text-white space-y-7 ml-4 pl-12 w-1/2'>
                                <h5 className='text-5xl font-bold'> Rajshi University Campus </h5>
                                

                            </div>
                        </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={log4} className="w-full" />
                <div className="absolute  flex items-center h-full left-0 right-0 top-4 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                            <div className='text-white space-y-7 ml-4 pl-12 w-1/2'>
                                <h5 className='text-5xl font-bold'> JahangirNagar University Campus</h5>
                              
                            </div>
                        </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
           
        </div>
    );
};


export default Banner;
