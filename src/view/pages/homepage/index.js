import BannerSection from '../../../components/banner';
import DropCollection from '../../../components/collection';
import NewArrivalPage from '../../../components/new-arrival';
import FeaturedProducts from '../../../components/featured';
import ContentBar from '../../../components/ContentBar';
import TestimonialSection from '../../../components/testimonial';
import CustomCategories from '../../../components/shared/CustomCategoires';
import CustomDrops from '../../../components/shared/CustomDrops';

const Homepage = () => {
    return (
        <>
            <BannerSection />
            <DropCollection />
            <NewArrivalPage />
            <ContentBar />
            <FeaturedProducts />
            <TestimonialSection />
            <CustomCategories />
            <CustomDrops />
        </>
    );
};

export default Homepage;
