import GalleryImage from "./GalleryImage/GalleryImage";
import Research from "./Research/Research";
import Search from "./Search/Search";

const Home = () => {
    return (
        <div>
            <Search></Search>
            <GalleryImage></GalleryImage>
            <Research></Research>
            
        </div>
    );
};

export default Home;