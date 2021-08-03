import React from 'react';
import MainHero from "../components/MainHero/MainHero";
import Catalog from "../components/Catalog/Catalog";
import Advantages from "../components/Advantages/Advantage";
import WhyUs from "../components/WhyUs/WhyUs";
import Reviews from "../components/Reviews/Reviews";
import ContactUs from "../components/ContactUs/ContactUs";
import Footer from "../components/Footer/Footer";
// import styles from '../styles/pages/home.module.scss';

const Home = () => {
    return (
        <>
        <MainHero/>
        <Catalog/>
        <Advantages/>
        <WhyUs/>
        <Reviews/>
        <ContactUs/>
        <Footer/>
        </>
    )
}

export default Home;