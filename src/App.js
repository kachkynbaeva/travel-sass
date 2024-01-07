import React from 'react';
import Header from "./Components/Header";
import Carousel from "./Components/Carousel/Carousel";
import SectionFutures from "./Components/HomeSections/SectionFutures/SectionFutures";
import TourSection from "./Components/HomeSections/ToursSection/TourSection";


const App = () => {
    return (
        <>
            <Header/>
            <Carousel/>
            <SectionFutures/>
            <TourSection/>
        </>
    );
};

export default App;
