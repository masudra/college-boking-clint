import Review from "../Review/Review";
import ThreeHomeCard from "../ThreeHomeCard/ThreeHomeCard";
import GalleryImage from "./GalleryImage/GalleryImage";
import Research from "./Research/Research";
import Search from "./Search/Search";

const Home = () => {
    return (
        <div>
            <Search></Search>
            <ThreeHomeCard></ThreeHomeCard>
            <GalleryImage></GalleryImage>
            <Research></Research>
            <Review></Review>
            
        </div>
    );
};

export default Home;