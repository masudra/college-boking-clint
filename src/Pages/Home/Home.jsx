import Review from "../Review/Review";
import ThreeHomeCard from "../ThreeHomeCard/ThreeHomeCard";
import Banner from "./Banner/Banner";
import ContactUsEmail from "./ContactUsEmail/ContactUsEmail";
import GalleryImage from "./GalleryImage/GalleryImage";
import Research from "./Research/Research";
import Search from "./Search/Search";

const Home = () => {
    return (
        <div>
            <Search></Search>
            <Banner></Banner>
            <ThreeHomeCard></ThreeHomeCard>
            <GalleryImage></GalleryImage>
            <Research></Research>
            <ContactUsEmail></ContactUsEmail>
            <Review></Review>
            
        </div>
    );
};

export default Home;