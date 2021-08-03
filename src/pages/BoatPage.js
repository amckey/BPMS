import React from 'react';
import BoatHero from "../components/BoatHero/BoatHero";
import Footer from "../components/Footer/Footer";
import BoatDesc from "../components/BoatDesc/BoatDesc";
import BoatGallery from "../components/BoatGallery/BoatGallery";

const BoatPage = () => {
    return (
         <>
             <BoatHero/>
             <BoatDesc/>
             <BoatGallery/>
             <Footer/>
         </>
    )
}

export default BoatPage;