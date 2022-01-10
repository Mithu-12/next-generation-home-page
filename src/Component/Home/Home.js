import React from 'react';
import BannerItems from '../BannerItems/BannerItems';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import MobileApps from '../MobileApps/MobileApps';
import TryFree from '../TryFree/TryFree';
import SpecialService from '../SpecialService/SpecialService';
import Offer from '../Offer/Offer';
import Registration from '../Registration/Registration';
import Footer from '../Footer/Footer';
import TeamSlider from '../TeamSlider/TeamSlider';

const Home = () => {
    return (
        <div>
        <Banner></Banner>
        <BannerItems></BannerItems>
        <Services></Services>
        <SpecialService></SpecialService>
        <MobileApps></MobileApps>
        <Registration></Registration>
        <TeamSlider></TeamSlider>
        <TryFree></TryFree>
        <Testimonials></Testimonials>
        <Footer></Footer>
        </div>
    );
};

export default Home;