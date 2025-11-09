import React from 'react';
import Hero from '../Components/Hero';
import Package from '../Components/Package';
import ForUse from '../Components/ForUse';
import Migrate from '../Components/Migrate';
import LogoSlider from '../Components/LogoSlider';
import DatacenterMap from '../Components/DatacenterMap';
import SupportSection from '../Components/SupportSection';
import Review from '../Components/Review';
import Faq from '../Components/Faq';
import Weekly from '../Components/Weekly';
import Speed from '../Components/Speed';
import ChatWidget from '../Components/ChatWidget';

const Home = () => {
    return (
        <div>
            {/* <ChatWidget></ChatWidget> */}
            <Hero></Hero>
            <Package></Package>
            <LogoSlider></LogoSlider>
            <ForUse></ForUse>
            <Migrate></Migrate>
            <DatacenterMap></DatacenterMap>
            <Speed></Speed>
            
            <Review></Review>
            <Weekly></Weekly>
            <SupportSection></SupportSection>
            <Faq></Faq>
        </div>
    );
};

export default Home;