import React,{useEffect, useState} from 'react';
import BoatHero from "../components/BoatHero/BoatHero";
import Footer from "../components/Footer/Footer";
import BoatDesc from "../components/BoatDesc/BoatDesc";
import BoatGallery from "../components/BoatGallery/BoatGallery";
import {futureModels, readyModels} from "../fixtures/data";

const BoatPage = (props) => {
    const goTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    useEffect(() => {
        goTop();
    },[])
    const arrayOfBoats = [...readyModels,...futureModels];
    const [boat, setBoat] = useState(null);
    useEffect(() => {
        const boatFilter = arrayOfBoats.filter(item => item.main.short_link === props.match.params.boat);
        setBoat(boatFilter[0]);
    },[])
    return (
         <>
             <BoatHero item={boat}/>
             {boat && boat.certification && <BoatDesc item={boat}/>}
             <BoatGallery item={boat}/>
             <Footer/>
         </>
    )
}

export default BoatPage;